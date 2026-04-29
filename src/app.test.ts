import { describe, expect, test } from "bun:test";
import app from "./app";

describe("App root", () => {
  describe("/ healthcheck", () => {
    test("GET / returns status ok", async () => {
      const res = await app.request("/");
      expect(res.status).toBe(200);
      expect(await res.text()).toBe("Status: OK");
    });
  });
});
