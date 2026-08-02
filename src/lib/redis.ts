import { Redis } from "@upstash/redis";
export const redis = Redis.fromEnv();
export const HISTORY_TTL_SECONDS = 24 * 60 * 60;

export const MAX_HISTORY_TURNS = 10;

export function historyKey(sessionId: string): string {
  return `chat:history:${sessionId}`;
}
