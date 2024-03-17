import { useMutation, useQuery, useQueryClient, UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import localforage from "localforage";
import { useAuth } from "../context/user-context";
import { AuthType } from "../models/auth";

export const apiClient = axios.create({
  baseURL: "http://localhost:3003/"
});

interface IUseApiQuery {
  key: string;
  url: string;
  config?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    refetchOnMount?: boolean;
  };
}

apiClient.interceptors.request.use(
  async (config) => {
    const user = await localforage.getItem<AuthType>("user");
    if (user) {
      const token = user.access_token;
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const useApiQuery = ({ key, url, config = {} }: IUseApiQuery): UseQueryResult<any, unknown> => {
  const { logout } = useAuth();
  return useQuery({
    queryKey: [key, url],
    queryFn: async () => {
      apiClient.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            logout();
          }

          return Promise.reject(error);
        }
      );
      const response: AxiosResponse<any> = await apiClient.get(url);
      if (response.status === 401) logout();
      if (response.status !== 200) throw new Error("Error fetching data");
      return response.data;
    },
    ...config,
  });
};

export const useApiMutation = (
  url: string,
  config = {},
  keys: string[],
  method: "POST" | "PUT" | "DELETE" = "POST"
): UseMutationResult<any, unknown, any, unknown> => {
  const queryClient = useQueryClient();
  let response: AxiosResponse<any>;
  return useMutation({
    mutationFn: async (data: unknown) => {
      if (method === "POST") {
        response = await apiClient.post(url, data);
      } else if (method === "PUT") {
        response = await apiClient.put(url, data);
      } else if (method === "DELETE") {
        response = await apiClient.delete(url);
      }
      if (response.status !== 200 && response.status !== 201) throw new Error("Error creating data");
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys });
    },
    ...config,
  });
};
