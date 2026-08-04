import { NextRequest, NextResponse } from "next/server";
import { ingestPdf } from "@/lib/ingest";

export const runtime = "nodejs";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; 
const PDF_MAGIC_BYTES = "%PDF-";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  const expected = `Bearer ${process.env.INGEST_SECRET}`;
  return auth === expected;
}

async function isActuallyPdf(file: Blob): Promise<boolean> {
  const headerBytes = await file.slice(0, 5).arrayBuffer();
  const header = Buffer.from(headerBytes).toString("ascii");
  return header === PDF_MAGIC_BYTES;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof Blob)) {
    return NextResponse.json(
      { error: "No PDF file provided under field name 'file'" },
      { status: 400 }
    );
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      {
        error: `File too large. Max size is ${MAX_FILE_SIZE_BYTES / (1024 * 1024)}MB`,
      },
      { status: 413 }
    );
  }

  if (file.size === 0) {
    return NextResponse.json({ error: "Uploaded file is empty" }, { status: 400 });
  }

  const isPdf = await isActuallyPdf(file);
  if (!isPdf) {
    return NextResponse.json(
      { error: "File is not a valid PDF" },
      { status: 400 }
    );
  }

  const fileName = (file as File).name || "uploaded.pdf";

  try {
    const result = await ingestPdf(file, fileName);
    return NextResponse.json({ success: true, ...result });
  } catch (err: any) {
    console.error("Ingestion failed:", err);
    return NextResponse.json(
      { error: "Ingestion failed" }, 
      { status: 500 }
    );
  }
}