import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { UserInterface } from "../models/User/model";

interface AuthContextValue {
  user: UserInterface | undefined;
  setUser: Dispatch<SetStateAction<UserInterface | undefined>>;
}
export const AuthContext = createContext<AuthContextValue>({
  user: undefined,
  setUser: () => {},
});

const Auth: FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
