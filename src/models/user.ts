import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  last_name: z.string(),
  password: z.string(),
  email: z.string().email(),
  cooking_habits: z.string(),
  couple_status: z.number(),
  createdAt: z.string(),
  contribution_type: z.number(),
  financially_supporting_others: z.number(),
  household_members: z.number(),
  partner_contribution: z.number(),
  updatedAt: z.string(),
  authStrategy: z.string().optional().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;
