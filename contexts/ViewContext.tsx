import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export enum View {
  SELLER,
  BUYER,
}

export interface ViewContextValue {
  view: View;
  setView: Dispatch<SetStateAction<View>>;
}

export const ViewContext = createContext<ViewContextValue>({
  view: View.SELLER,
  setView: () => {},
});

export const ViewProvider: FC = ({ children }) => {
  const [view, setView] = useState<View>(View.SELLER);

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
