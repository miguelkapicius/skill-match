import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { analyze } from "./services/gemini";
import { USER_DATA_SCHEMA, type UserData } from "./types/user-data.type";

export async function routes(fastify: FastifyInstance) {
  fastify.get(
    "/health",
    {
      schema: {
        response: {
          200: z.object({
            status: z.string().default("ok"),
          }),
        },
        description: "Check the health of the API",
        tags: ["health"],
      },
    },
    async () => {
      return { status: "ok" };
    },
  );

  fastify.post<{ Body: UserData }>(
    "/analyze",
    {
      schema: {
        tags: ["analyze"],
        description: "Analyze user data",
        body: USER_DATA_SCHEMA,
        response: {
          200: z.object({
            analysis: z.object({
              summary: z.string(),
              soft_skills: z.object({
                strengths: z.array(z.string()),
                to_improve: z.array(z.string()),
              }),
              hard_skills: z.object({
                missing: z.array(z.string()),
                recommended: z.array(z.string()),
              }),
              recommendations: z.array(z.string()),
              readiness_score: z.number(),
            }),
          }),
        },
      },
    },
    async (request) => {
      const userData = request.body;
      const analysis = await analyze(userData);
      return { analysis };
    },
  );
}
