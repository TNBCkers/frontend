/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UserInterface } from "../models/User/model";
import request from "../modules/http";

export enum STATUS {
  LOGGED,
  VISITOR,
  PENDING,
}
interface AuthContextValue {
  user: UserInterface | undefined;
  setUser: Dispatch<SetStateAction<UserInterface | undefined>>;
  status: STATUS;
  setStatus: Dispatch<SetStateAction<STATUS>>;
}
export const AuthContext = createContext<AuthContextValue>({
  user: undefined,
  setUser: () => {},
  status: STATUS.VISITOR,
  setStatus: () => {},
});

const Auth: FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | undefined>(undefined);
  const [status, setStatus] = useState<STATUS>(STATUS.VISITOR);

  const router = useRouter();

  const refresh = useCallback(() => {
    request.get(`/user/me`).then(({ data }) => {
      setUser(data);
      setStatus(STATUS.LOGGED);
    });
  }, []);

  useEffect(() => {
    if (router.pathname === "/") return;
    refresh();
  }, []);

  if (status === STATUS.PENDING) return <h1>Loading</h1>;

  return (
    <AuthContext.Provider value={{ user, setUser, status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
