import { Hono } from "hono";
import { register } from "./routes/register";
const app = new Hono();

app.route("/api/", register);

export default app;
