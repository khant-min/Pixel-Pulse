export type Reaction = "like" | "love" | "star" | "sad" | "angry";

export interface ToastType {
  open: boolean;
  status?: "success" | "error" | "info" | "warning";
  message?: string;
}

export interface DataContextProps {
  toast: ToastType;
  setToast: React.Dispatch<React.SetStateAction<ToastType>>;
}
