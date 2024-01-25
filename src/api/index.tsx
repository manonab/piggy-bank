import { fetcher } from "../helpers/fetcher";
import { Auth, SignUpParams } from "../models/auth";

const API_URL = process.env.API_URL;

export const apiAuth = {
  signIn: (data: Auth) =>
    fetcher(`http://localhost:3003/api/auth/signin`, { data, method: "POST" }),
  signUp: (data: SignUpParams) =>
    fetcher(`${API_URL}auth/sign_up`, { data, method: "POST" }),
}