import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import NavBar from "../components/NavBar";
import { Box, Stack } from "@mui/material";
import NewFeed from "../components/NewFeed";

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2} mt={10}>
        <SideBar />
        <NewFeed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Layout;
