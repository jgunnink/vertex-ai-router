import { Context } from "hono";
import { GEMINI_FLASH_LITE_MODEL_LATEST } from "../services/gemini.service";
import { Type } from "@google/genai";
import { Summary } from "../dataTypes";
import { getGeminiService } from "./gemini";

const baseSystemInstruction = `You're an expert summariser of unstructured text.`;
const createSummariseSystemInstruction = `${baseSystemInstruction}. Please summarise the text provided. Do not make anything up.`;

export const summarise = async (c: Context) => {
  const geminiService = getGeminiService();
  const body = await c.req.json();
  const systemInstruction = createSummariseSystemInstruction;
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      summary: { type: Type.STRING }
    },
    required: ["summary"]
  };

  const response = await geminiService.models.generateContent({
    model: GEMINI_FLASH_LITE_MODEL_LATEST,
    contents: body.text,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: responseSchema
    }
  });

  const rawText = response.candidates?.[0]?.content?.parts?.[0]?.text || "";
  let parsedContent: Summary;
  try {
    const parsed = JSON.parse(rawText);
    parsedContent = {
      summary: typeof parsed?.summary === "string" ? parsed.summary : rawText
    };
  } catch (error) {
    console.error("Failed to parse AI response as JSON", error);
    parsedContent = { summary: rawText };
  }

  return c.json({ content: parsedContent });
};
