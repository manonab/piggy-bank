import { string, z } from "zod";
import { UserType } from "./user";

export type Auth = {
  email: string;
  password: string;
};

export interface SignUpParams {
  name: string;
  last_name: string;
  password: string;
  email: string;
}
export const SignUpSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  password: z.string(),
  email: z.string(),
});
export interface AuthPayload {
  data: {
    message: string;
  };
  headers: Headers;
  status: number;
}
export const AuthSchema = z.object({
  access_token: z.string(),
  expires_at: z.number(),
  message: z.string(),
  user_id: z.string(),
});

export const SigninSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export interface AuthCredentials {
  data: UserType;
  cookies?: {
    jwt: string;
    value: string;
  };
  headers: Headers;
  status: number;
}

export type SignUpType = z.infer<typeof SignUpSchema>;

export type SignInType = z.infer<typeof SigninSchema>;

export type AuthType = z.infer<typeof AuthSchema>;
