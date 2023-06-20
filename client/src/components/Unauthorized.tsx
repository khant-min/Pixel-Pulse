import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  localStorage.removeItem("ACCESS_TOKEN");
  return (
    <div>
      <Typography>Unauthorized Access</Typography>
      <Link to="/auth">Login</Link>
    </div>
  );
};

export default Unauthorized;
