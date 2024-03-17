import localforage from "localforage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { apiAuth } from "../api";
import { useAuth } from "../context/user-context";
import { AuthType } from "../models/auth";
import { useApiMutation } from "../utils";

export const useSignInMutation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useAuth();
  const router = useRouter()
  const mutation = useApiMutation("/api/auth/signin", {
    onSuccess: (data: AuthType) => {
      setUser(data);
      localforage.setItem("user", data);
      setLoading(false);
      router.push("/dashboard");
    },
    onError: (error: unknown) => {
      setLoading(false);
      console.log(error);
    },
  },
    ["user"],
    "POST"
  )
  return {
    authMutate: mutation.mutate,
    authLoading: loading,
    setAuthLoading: setLoading,
  };
};
