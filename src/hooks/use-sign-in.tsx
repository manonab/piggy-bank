import { useState } from "react";
import { apiAuth } from "../api";
import { fetcher } from "../helpers/fetcher";
import { AuthPayload } from "../models/auth";

interface SignInParams {
  email: string;
  password: string;
}
interface SignInResult {
  error: string | null;
  isLoading: boolean;
  signIn: (params: SignInParams) => Promise<AuthPayload | undefined>;
}

export const useSignIn = (): SignInResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (params: SignInParams): Promise<AuthPayload | undefined> => {
    setIsLoading(true);
    try {
      const response = await fetcher('http://localhost:3003/api/auth/signin', {
        method: 'POST',
        data: params,
      });
      console.log('API Response from signIn:', response);
      return response;

    } catch (error) {
      console.error('Error in signIn:', error);
      throw error;
    }
  };

  return { error, isLoading, signIn };
};
