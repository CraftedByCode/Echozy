import { Hono } from "hono";
import { cors } from "hono/cors";
import { loginRoute } from "./routes/login";
const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000", // Allow requests from your frontend
    allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.route("/login", loginRoute);
export default app;
