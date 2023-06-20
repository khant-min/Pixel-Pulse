import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useAuth } from "../../context/DataContext";
import { DataContextProps } from "../../types/global.types";

export default function SimpleSnackbar() {
  const { toast, setToast } = useAuth() as DataContextProps;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ open: false });
  };

  return (
    <>
      {toast.open && (
        <Snackbar
          open={toast.open}
          onClose={handleClose}
          autoHideDuration={2000}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        >
          <Alert severity={toast.status} onClose={handleClose} variant="filled">
            {toast.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
