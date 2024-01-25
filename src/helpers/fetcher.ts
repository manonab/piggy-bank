interface Options<DataT> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: DataT;
}

export const fetcher = async <T>(
  endpoint?: string,
  opts?: Options<T>,
  token?: string,
): Promise<any> => {
  const method = opts?.method;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
  try {
    const requestOptions: RequestInit = {
      method: method,
      headers,
      body: method === "POST" ? JSON.stringify(opts?.data) : undefined,
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
    if (typeof error === "string") throw new Error(error);
  } finally {
    console.log("Finished");
  }
};
