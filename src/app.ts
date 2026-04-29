import { Hono } from "hono";
import { summarise } from "./handlers/summarise";

const app = new Hono();

app.get("/", c => {
  console.info("GET /");
  return c.text("Status: OK");
});

const v1 = new Hono().basePath("/api/v1");

v1.post("/summarise", summarise);

app.route("/", v1);

export default app;
