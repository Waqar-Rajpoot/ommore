// import { StateGraph, Annotation, END, START } from "@langchain/langgraph";
// import { ChatGroq } from "@langchain/groq";
// import { qdrantClient, QDRANT_COLLECTION, ensureCollection } from "./qdrant-client";
// import { embedQuery } from "./embeddings";
// import { buildPrompt, ChatTurn } from "./prompt";
// import { redis, historyKey, HISTORY_TTL_SECONDS, MAX_HISTORY_TURNS } from "./redis";

// interface ChunkPayload {
//   text?: string;
//   source?: string;
// }

// const RELEVANCE_THRESHOLD = 0.35;
// const TOP_K = 5;

// const GraphState = Annotation.Root({
//   sessionId: Annotation<string>(),
//   question: Annotation<string>(),
//   history: Annotation<ChatTurn[]>(),
//   retrievedContext: Annotation<string>(),
//   hasRelevantContext: Annotation<boolean>(),
//   answer: Annotation<string>(),
// });

// const llm = new ChatGroq({
//   apiKey: process.env.GROQ_API_KEY,
//   model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
//   temperature: 0.1, 
// });

// async function loadHistoryNode(state: typeof GraphState.State) {
//   const history = (await redis.get<ChatTurn[]>(historyKey(state.sessionId))) || [];
//   return { history };
// }

// async function retrieveNode(state: typeof GraphState.State) {
//   await ensureCollection();

//   const queryVector = await embedQuery(state.question);

//   const results = await qdrantClient.search(QDRANT_COLLECTION, {
//     vector: queryVector,
//     limit: TOP_K,
//     with_payload: true,
//   });

//   const relevantChunks = results.filter((r) => (r.score ?? 0) >= RELEVANCE_THRESHOLD);

//   const context = relevantChunks
//     .map((r) => (r.payload as ChunkPayload | null)?.text)
//     .filter(Boolean)
//     .join("\n\n---\n\n");

//   return {
//     retrievedContext: context,
//     hasRelevantContext: relevantChunks.length > 0,
//   };
// }

// async function generateNode(state: typeof GraphState.State) {
//   if (!state.hasRelevantContext) {
//     return {
//       answer:
//         "That's not something I have information on. I can help with questions about our services, process, pricing, and policies — feel free to ask about any of those, or reach out to our team directly for anything else.",
//     };
//   }

//   const prompt = buildPrompt(state.retrievedContext, state.question, state.history);
//   const response = await llm.invoke(prompt);

//   return { answer: response.content as string };
// }

// async function saveHistoryNode(state: typeof GraphState.State) {
//   const updated: any = [
//     ...state.history,
//     { role: "user", content: state.question },
//     { role: "assistant", content: state.answer },
//   ].slice(-MAX_HISTORY_TURNS);

//   await redis.set(historyKey(state.sessionId), updated, { ex: HISTORY_TTL_SECONDS });
//   return {};
// }

// const workflow = new StateGraph(GraphState)
//   .addNode("loadHistory", loadHistoryNode)
//   .addNode("retrieve", retrieveNode)
//   .addNode("generate", generateNode)
//   .addNode("saveHistory", saveHistoryNode)
//   .addEdge(START, "loadHistory")
//   .addEdge("loadHistory", "retrieve")
//   .addEdge("retrieve", "generate")
//   .addEdge("generate", "saveHistory")
//   .addEdge("saveHistory", END);

// export const ragGraph = workflow.compile();

// export async function runRagQuery(question: string, sessionId: string): Promise<string> {
//   const result = await ragGraph.invoke({ question, sessionId });
//   return result.answer;
// }








import { StateGraph, Annotation, END, START } from "@langchain/langgraph";
import { ChatGroq } from "@langchain/groq";
import { qdrantClient, QDRANT_COLLECTION, ensureCollection } from "./qdrant-client";
import { embedQuery } from "./embeddings";
import { buildPrompt, ChatTurn } from "./prompt";
import { redis, historyKey, HISTORY_TTL_SECONDS, MAX_HISTORY_TURNS } from "./redis";

interface ChunkPayload {
  text?: string;
  source?: string;
}

const RELEVANCE_THRESHOLD = 0.35;
const TOP_K = 5;

const GraphState = Annotation.Root({
  sessionId: Annotation<string>(),
  question: Annotation<string>(),
  history: Annotation<ChatTurn[]>(),
  retrievedContext: Annotation<string>(),
  hasRelevantContext: Annotation<boolean>(),
  answer: Annotation<string>(),
});

const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  temperature: 0.1,
});

async function loadHistoryNode(state: typeof GraphState.State) {
  const history = (await redis.get<ChatTurn[]>(historyKey(state.sessionId))) || [];
  return { history };
}

async function retrieveNode(state: typeof GraphState.State) {
  await ensureCollection();

  const queryVector = await embedQuery(state.question);

  const results = await qdrantClient.search(QDRANT_COLLECTION, {
    vector: queryVector,
    limit: TOP_K,
    with_payload: true,
  });

  const relevantChunks = results.filter((r) => (r.score ?? 0) >= RELEVANCE_THRESHOLD);

  const context = relevantChunks
    .map((r) => (r.payload as ChunkPayload | null)?.text)
    .filter(Boolean)
    .join("\n\n---\n\n");

  return {
    retrievedContext: context,
    hasRelevantContext: relevantChunks.length > 0,
  };
}

async function generateNode(state: typeof GraphState.State) {
  // NOTE: we no longer short-circuit to a canned reply when hasRelevantContext
  // is false. The vector store only holds company knowledge, so it will never
  // "match" things like a user's name or preferences stated earlier in the
  // conversation. Those should still be answerable from history. The system
  // prompt (see prompt.ts) is responsible for keeping the model from inventing
  // company facts when retrievedContext is empty — it always has the final say
  // on what it's allowed to state as fact.
  const prompt = buildPrompt(state.retrievedContext, state.question, state.history);
  const response = await llm.invoke(prompt);

  return { answer: response.content as string };
}

async function saveHistoryNode(state: typeof GraphState.State) {
  const updated: any = [
    ...state.history,
    { role: "user", content: state.question },
    { role: "assistant", content: state.answer },
  ].slice(-MAX_HISTORY_TURNS);

  await redis.set(historyKey(state.sessionId), updated, { ex: HISTORY_TTL_SECONDS });
  return {};
}

const workflow = new StateGraph(GraphState)
  .addNode("loadHistory", loadHistoryNode)
  .addNode("retrieve", retrieveNode)
  .addNode("generate", generateNode)
  .addNode("saveHistory", saveHistoryNode)
  .addEdge(START, "loadHistory")
  .addEdge("loadHistory", "retrieve")
  .addEdge("retrieve", "generate")
  .addEdge("generate", "saveHistory")
  .addEdge("saveHistory", END);

export const ragGraph = workflow.compile();

export async function runRagQuery(question: string, sessionId: string): Promise<string> {
  const result = await ragGraph.invoke({ question, sessionId });
  return result.answer;
}