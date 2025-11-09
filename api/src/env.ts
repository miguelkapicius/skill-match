import { z } from "zod";

const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, { message: "GEMINI_API_KEY is required" }),
});

const env = envSchema.parse(process.env);

export default env;
