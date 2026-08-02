import { NextRequest, NextResponse } from "next/server";
import { ingestPdf } from "@/lib/ingest";

export const runtime = "nodejs";

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  const expected = `Bearer ${process.env.INGEST_SECRET}`;
  return auth === expected;
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

  const fileName = (file).name || "uploaded.pdf";

  try {
    const result = await ingestPdf(file, fileName);
    return NextResponse.json({ success: true, ...result });
  } catch (err: any) {
    console.error("Ingestion failed:", err);
    return NextResponse.json(
      { error: "Ingestion failed", detail: err.message },
      { status: 500 }
    );
  }
}
