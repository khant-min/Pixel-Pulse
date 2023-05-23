import { Box } from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} bgcolor="green" sx={{ display: { xs: "none", sm: "block" } }}>
      right bar
    </Box>
  );
};

export default RightBar;
