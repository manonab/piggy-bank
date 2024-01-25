import { useState } from "react";
import { apiAuth } from "../api";
import { fetcher } from "../helpers/fetcher";
import { AuthPayload, SignUpParams } from "../models/auth";

interface SignUpResult {
  error: string | null;
  isLoading: boolean;
  signup: (params: SignUpParams) => Promise<AuthPayload | undefined>;
}

export const useSignUp = (): SignUpResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signup = async (params: SignUpParams): Promise<AuthPayload | undefined> => {
    setIsLoading(true);
    try {
      const response = await fetcher('http://localhost:3003/api/auth/signup', {
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

  return { error, isLoading, signup };
};
