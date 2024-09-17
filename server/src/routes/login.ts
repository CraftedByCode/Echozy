import { Hono } from "hono";

export const loginRoute = new Hono().post("/", async (c) => {
  const form = await c.req.json();
  console.log(form);
  return c.json({
    message: "Form data received successfully",
  });
});
