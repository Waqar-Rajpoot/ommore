import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { randomUUID } from "crypto";
import { ensureCollection, qdrantClient, QDRANT_COLLECTION } from "./qdrant-client";
import { embedTexts } from "./embeddings";

interface IngestResult {
  sourceFile: string;
  chunksIndexed: number;
}

export async function ingestPdf(
  file: Blob,
  sourceFileName: string
): Promise<IngestResult> {
  await ensureCollection();

  // 1. Load and extract text
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const parser = new PDFParse({ data: buffer });
  let rawText: string;
  try {
    const result = await parser.getText();
    rawText = result.text;
  } finally {
    await parser.destroy();
  }

  if (!rawText || !rawText.trim()) {
    return { sourceFile: sourceFileName, chunksIndexed: 0 };
  }

  // 2. Chunk the extracted text
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 150,
  });
  const chunks = await splitter.createDocuments([rawText], [{ source: sourceFileName }]);

  if (chunks.length === 0) {
    return { sourceFile: sourceFileName, chunksIndexed: 0 };
  }

  // 3. Embed all chunks
  const texts = chunks.map((c) => c.pageContent);
  const vectors = await embedTexts(texts);

  const points = chunks.map((chunk, i) => ({
    id: randomUUID(),
    vector: vectors[i],
    payload: {
      text: chunk.pageContent,
      source: sourceFileName,
    },
  }));

  // 5. Upsert into Qdrant
  await qdrantClient.upsert(QDRANT_COLLECTION, {
    wait: true,
    points,
  });

  return { sourceFile: sourceFileName, chunksIndexed: points.length };
}