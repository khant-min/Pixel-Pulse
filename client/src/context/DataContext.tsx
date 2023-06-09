// imports from react
import { createContext, useState, useContext } from "react";
import { DataContextProps, ToastType } from "../types/global.types";

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("");
  const [token, _setToken] = useState<string>("");
  const [toast, setToast] = useState<ToastType>({
    open: false,
  });

  const setToken = (token: string) => {
    _setToken(token);
    if (!token) return localStorage.removeItem("ACCESS_TOKEN");
    localStorage.setItem("ACCESS_TOKEN", token);
  };

  return (
    <DataContext.Provider
      value={{ toast, setToast, user, setUser, token, setToken }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => useContext(DataContext);

export default DataContext;
