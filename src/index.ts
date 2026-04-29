import app from "./app";

const port = parseInt(process.env.PORT || "3000");

const server = Bun.serve({
  fetch: app.fetch,
  port
});

console.info(`Service is running on port ${server.port}`);

const shutdown = () => {
  console.info("Shutting down...");
  server.stop();
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
