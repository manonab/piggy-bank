import { AuthType } from "@/src/models/auth";
import { UserType } from "@/src/models/user";
import { useApiQuery } from "@/src/utils";
import localforage from "localforage";

export const useUser = () => {
  const getUserToken = async (): Promise<string | null> => {
    const authData: AuthType | null = await localforage.getItem<AuthType>("user");
    return authData ? authData.access_token : null;
  };

  const userToken = getUserToken();
  console.log(userToken);

  const { data: userDatas } = useApiQuery({
    key: "auth",
    url: `api/auth/authenticatedUser`,
    config: {
      enabled: !!userToken,
    },
  });

  const userData: UserType = userDatas;

  return { userData };
};
