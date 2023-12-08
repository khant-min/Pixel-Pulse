import {
  AppBar,
  Toolbar,
  styled,
  Box,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pain from "../public/assets/pain.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#278",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 4,
  width: "40%",
});

const NavBar = () => {
  const [openAcc, setOpenAcc] = useState<boolean>(false);
  const [openMsg, setOpenMsg] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          {/* <Avatar alt="Pain" src={pain} /> */}
          <Button onClick={() => navigate("/")}>
            <Typography color="white">Facebook</Typography>
          </Button>
          <Search>
            <InputBase placeholder="search something..." fullWidth />
          </Search>
          <Box display="flex" justifyContent="space-between">
            <IconButton onClick={() => setOpenMsg(true)}>
              <ChatIcon
                color="secondary"
                sx={{
                  bgcolor: "lightgray",
                  p: 1,
                  borderRadius: "100%",
                }}
              />
            </IconButton>
            <IconButton>
              <NotificationsIcon
                color="secondary"
                sx={{
                  bgcolor: "lightgray",
                  p: 1,
                  borderRadius: "100%",
                }}
              />
            </IconButton>
            <IconButton onClick={() => navigate("/profile?id=23232332")}>
              {/* <AccountCircleIcon
                color="secondary"
                sx={{
                  bgcolor: "lightgray",
                  p: 1,
                  borderRadius: "100%",
                }}
              /> */}
              <Avatar alt="Pain" src={pain} />
            </IconButton>
          </Box>
        </StyledToolbar>
      </AppBar>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openAcc}
        onClick={() => setOpenAcc(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu> */}
    </>
  );
};

export default NavBar;
