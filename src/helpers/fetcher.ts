interface Options<DataT> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: DataT;
}

interface FetchOptions<DataT> extends Options<DataT> {
  credentials?: "include";
}

export const fetcher = async <T>(
  endpoint?: string,
  opts?: FetchOptions<T>,
): Promise<any> => {
  const method = opts?.method;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    const requestOptions: RequestInit = {
      method: method,
      headers,
      body: method === "POST" ? JSON.stringify(opts?.data) : undefined,
      credentials: opts?.credentials || "same-origin",
    };

    const response = await fetch(`${endpoint}`, requestOptions);
    const data = await response.json();
    const status = response.status;
    const ReqHeaders = response.headers;

    return {
      data,
      status,
      headers: ReqHeaders,
    };
  } catch (error) {
    console.error("Error during fetch:", error);
    throw new Error("Failed to fetch data");
  }
};
