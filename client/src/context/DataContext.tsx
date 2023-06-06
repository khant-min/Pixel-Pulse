// imports from react
import { createContext, useState, useContext } from "react";
import { DataContextProps, ToastType } from "../types/global.types";

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastType>({
    open: false,
  });

  return (
    <DataContext.Provider value={{ toast, setToast }}>
      {children}
    </DataContext.Provider>
  );
};

export const useAuth = () => useContext(DataContext);

export default DataContext;
