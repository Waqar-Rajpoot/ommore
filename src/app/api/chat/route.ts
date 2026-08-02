import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { runRagQuery } from "@/lib/graph";

export const runtime = "nodejs";

interface ChatRequestBody {
  question?: string;
  sessionId?: string;
}

export async function POST(req: NextRequest) {
  const body: ChatRequestBody | null = await req.json().catch(() => null);
  const question = body?.question;

  if (!question || typeof question !== "string" || !question.trim()) {
    return NextResponse.json(
      { error: "Request body must include a non-empty 'question' string" },
      { status: 400 }
    );
  }

  const sessionId = body?.sessionId && body.sessionId.trim() ? body.sessionId : randomUUID();

  try {
    const answer = await runRagQuery(question.trim(), sessionId);
    return NextResponse.json({ answer, sessionId });
  } catch (err: unknown) {
    console.error("RAG query failed:", err);
    return NextResponse.json(
      { error: "Something went wrong processing your question" },
      { status: 500 }
    );
  }
}