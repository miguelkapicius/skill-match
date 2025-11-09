import z from "zod";

export const USER_DATA_SCHEMA = z.object({
  current_role: z.string().min(1).max(255),
  goal_role: z.string().min(1).max(255),
  experience_years: z.number().min(0).max(100),
  skills: z.object({
    communication: z.number().min(1).max(5),
    problem_solving: z.number().min(1).max(5),
    teamwork: z.number().min(1).max(5),
    leadership: z.number().min(1).max(5),
  }),
});

export type UserData = z.infer<typeof USER_DATA_SCHEMA>;
