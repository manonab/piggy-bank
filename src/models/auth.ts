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

export interface AuthPayload {
  data: {
    message: string;
  };
  headers: Headers;
  status: number;
}
