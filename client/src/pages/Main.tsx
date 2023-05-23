import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import NavBar from "../components/NavBar";
import { Box, Stack } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Layout;
