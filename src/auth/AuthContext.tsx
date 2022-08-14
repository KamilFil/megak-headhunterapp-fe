import { createContext, useEffect, useState } from 'react';
import { AdminEntity, HrEntity, StudentEntity } from 'types';
import { Role } from '../../../megak-headhunterapp-be/types/auth/role.enum';

export type AuthUser = {
  data: StudentEntity | HrEntity | AdminEntity | null;
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
  const [auth, setAuth] = useState<AuthUser | null>({} as AuthUser);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch('http://localhost:3001/auth/profile', {
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include',
  //     });
  //
  //     const data = await res.json();
  //     setAuth(data);
  //
  //     // console.log('Gdzie Data APP', auth);
  //   })();
  // });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
