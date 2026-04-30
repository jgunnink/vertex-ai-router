import { describe, expect, test } from "bun:test";

import ai, { GEMINI_FLASH_MODEL_PREVIEW, GEMINI_FLASH_LITE_MODEL_LATEST, GEMINI_FLASH_MODEL_LATEST } from "./gemini.service";

describe("Gemini Service Configuration", () => {
  test("should expose model constants", () => {
    expect(GEMINI_FLASH_MODEL_PREVIEW).toBeDefined();
    expect(GEMINI_FLASH_LITE_MODEL_LATEST).toBeDefined();
    expect(GEMINI_FLASH_MODEL_LATEST).toBeDefined();
  });

  test("should export an initialised AI instance", () => {
    expect(ai).toBeDefined();
  });
});
