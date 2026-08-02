import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  throw new Error("Missing GOOGLE_API_KEY in environment variables");
}

const documentEmbedder = new GoogleGenerativeAIEmbeddings({
  apiKey: API_KEY,
  model: "gemini-embedding-001", 
  taskType: TaskType.RETRIEVAL_DOCUMENT,
});

const queryEmbedder = new GoogleGenerativeAIEmbeddings({
  apiKey: API_KEY,
  model: "gemini-embedding-001",
  taskType: TaskType.RETRIEVAL_QUERY,
});

export async function embedTexts(texts: string[]): Promise<number[][]> {
  return documentEmbedder.embedDocuments(texts);
}

export async function embedQuery(text: string): Promise<number[]> {
  return queryEmbedder.embedQuery(text);
}