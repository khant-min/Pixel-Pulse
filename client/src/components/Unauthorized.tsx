import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  localStorage.removeItem("ACCESS_TOKEN");
  return (
    <Box>
      <Typography>Unauthorized Request</Typography>
      <Link to="/auth">Login again</Link>
    </Box>
  );
};

export default Unauthorized;
