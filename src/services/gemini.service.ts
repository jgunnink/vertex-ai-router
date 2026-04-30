import { GoogleGenAI } from "@google/genai";

let PROJECT: string | undefined = process.env.PROJECT_ID;
let LOCATION: string | undefined = process.env.LOCATION || "global";

export const GEMINI_FLASH_MODEL_PREVIEW = "gemini-3-flash-preview";
export const GEMINI_FLASH_LITE_MODEL_LATEST = "gemini-flash-lite-latest";
export const GEMINI_FLASH_MODEL_LATEST = "gemini-flash-latest";

const hasApiKey = Boolean(process.env.GEMINI_API_KEY);
const useVertex = !hasApiKey;

if (hasApiKey) {
  PROJECT = undefined;
  LOCATION = undefined;
}

const isTest = process.env.NODE_ENV === "test";
const ai = new GoogleGenAI({
  vertexai: useVertex,
  apiKey: hasApiKey ? process.env.GEMINI_API_KEY : undefined,
  project: PROJECT || (isTest && !hasApiKey ? "test-project" : undefined),
  location: LOCATION
});

export default ai;
