import { createContext, useState } from 'react';
import { Role } from '../../../megak-headhunterapp-be/types/auth/role.enum';

export type AuthUser = {
  id: string;
  roles: Role;
};

type AuthContextType = {
  auth: AuthUser | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: UserContextProviderProps) => {
  const [auth, setAuth] = useState<AuthUser | null>(null);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
