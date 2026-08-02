import { QdrantClient } from "@qdrant/js-client-rest";

const QDRANT_URL = process.env.QDRANT_URL!;
const QDRANT_API_KEY = process.env.QDRANT_API_KEY!;
export const QDRANT_COLLECTION = process.env.QDRANT_COLLECTION || "ommore_kb";

export const VECTOR_SIZE = 3072;

if (!QDRANT_URL || !QDRANT_API_KEY) {
  throw new Error("Missing QDRANT_URL or QDRANT_API_KEY in environment variables");
}

export const qdrantClient = new QdrantClient({
  url: QDRANT_URL,
  apiKey: QDRANT_API_KEY,
});
export async function ensureCollection() {
  const collections = await qdrantClient.getCollections();
  const exists = collections.collections.some(
    (c) => c.name === QDRANT_COLLECTION
  );

  if (!exists) {
    await qdrantClient.createCollection(QDRANT_COLLECTION, {
      vectors: {
        size: VECTOR_SIZE,
        distance: "Cosine",
      },
    });
  }
}