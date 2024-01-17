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
import { useDispatch, useSelector } from "react-redux";
import { toggling, toggle } from "../redux/features/Theme";
import "./styles.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
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
  const dispatch = useDispatch();
  const pageTheme = useSelector(toggling);

  const toggleTheme = () => {
    pageTheme === "DARK" ? dispatch(toggle("LIGHT")) : dispatch(toggle("DARK"));
  };

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar
          className={pageTheme === "DARK" ? "light-header" : "dark-header"}
        >
          {/* <Avatar alt="Pain" src={pain} /> */}
          <Button onClick={() => navigate("/")}>
            {/* <Typography className="brand" color="white">
              Pixel Pulse
            </Typography> */}
            <div className="brand-logo">Pixel Pulse</div>
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
            <IconButton onClick={toggleTheme}>
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
