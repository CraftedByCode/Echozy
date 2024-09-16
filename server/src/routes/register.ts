import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = new Hono().post("/", async (c) => {
  const { name, email, password } = await c.req.json();

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
});
