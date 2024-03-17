import { createContext, useState, ReactNode, useEffect, useContext } from "react";
import localforage from "localforage";
import { AuthType } from "../models/auth";

export type UserContextType = {
  user: AuthType | null;
  setUser: (user: AuthType | null) => void;
  authenticated: boolean;
  logout: () => void;
}

const initialUserContext: UserContextType = {
  user: null,
  setUser: () => { },
  authenticated: false,
  logout: () => { }
};

export const UserContext = createContext<UserContextType>(initialUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthType | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userFromStorage = await localforage.getItem<AuthType>("user");
        if (userFromStorage && new Date() < new Date(userFromStorage.expires_at)) {
          setUser(userFromStorage);
          setAuthenticated(true);
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    };
    checkUser();
  }, []);

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    localforage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, setUser, authenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }
  return context;
};
