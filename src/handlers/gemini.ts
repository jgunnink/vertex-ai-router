import ai from "../services/gemini.service";
import { GoogleGenAI } from "@google/genai";

let _geminiService: GoogleGenAI | null = null;

export const getGeminiService = () => {
  if (!_geminiService) {
    _geminiService = ai;
  }
  return _geminiService;
};

export const setGeminiService = (service: unknown) => {
  _geminiService = service as GoogleGenAI;
};
