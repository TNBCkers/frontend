import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { UserInterface } from "../models/User/model";

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

  if (status === STATUS.PENDING) return <h1>Loading</h1>;

  return (
    <AuthContext.Provider value={{ user, setUser, status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
