import { createContext } from "react";

interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (user: any) => void;
  teste: boolean;
  setTeste: (teste: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
