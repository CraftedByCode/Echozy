import app from "./src/app";

console.log("Server runing!");
Bun.serve({
  port: 8000,
  fetch: app.fetch,
});
