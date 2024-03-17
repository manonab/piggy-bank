import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiAuth } from "../api";
import { fetcher } from "../helpers/fetcher";
import { AuthPayload, SignUpParams, SignUpType } from "../models/auth";
import { useApiMutation } from "../utils";


export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const mutation = useApiMutation("/api/auth/signup", {
    onSuccess: (data: string) => {
      console.log(data)
      setLoading(false);
      router.push("/");
    },
    onError: (error: unknown) => {
      setLoading(false);
      console.log(error);
    },
  },
    ["signup"],
    "POST"
  )
  return {
    authSignUp: mutation.mutate,
    authLoading: loading,
    setAuthLoading: setLoading,
  };
};
