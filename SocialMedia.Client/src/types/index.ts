export type Reaction = "like" | "love" | "star" | "sad" | "angry";
export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export interface ToastType {
  open: boolean;
  status?: "success" | "error" | "info" | "warning";
  message?: string;
}

export interface DataContextProps {
  toast: ToastType;
  setToast: React.Dispatch<React.SetStateAction<ToastType>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  setToken: (token: string) => void;
}
