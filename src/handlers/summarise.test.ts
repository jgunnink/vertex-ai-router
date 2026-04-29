import { describe, expect, test, mock, beforeEach } from "bun:test";
import { Hono } from "hono";
import { setGeminiService } from "./gemini";
import { summarise } from "./summarise";

describe("Handlers Integration", () => {
  let app: Hono;

  beforeEach(() => {
    app = new Hono();
    app.post("/summarise", summarise);

    const mockService = {
      models: {
        generateContent: mock(async () => ({
          candidates: [
            {
              content: {
                parts: [{ text: JSON.stringify({ summary: "mocked handler response" }) }]
              }
            }
          ]
        }))
      }
    };

    setGeminiService(mockService as unknown);
  });

  test("summarise", async () => {
    const res = await app.request("/summarise", {
      method: "POST",
      body: JSON.stringify({ text: "Sample text to summarise" }),
      headers: { "Content-Type": "application/json" }
    });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ content: { summary: "mocked handler response" } });
  });
});
