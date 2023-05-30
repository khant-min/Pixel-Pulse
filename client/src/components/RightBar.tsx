import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const StyledBar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
});

const RightBar = () => {
  return (
    <Box
      component="section"
      flex={2}
      sx={{
        display: { xs: "none", sm: "block" },
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <StyledBar>
        <Typography>Contacts</Typography>
        <StyledBar>
          <IconButton>
            <EmergencyRecordingIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </StyledBar>
      </StyledBar>

      <Stack>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="ei ei" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="la woon" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="myat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="mayve" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="snow" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="pusi" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="nyo nyo" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="the nyo ma" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="the nyo ma" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="the nyo ma" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list" sx={{ gap: 2 }}>
              <Avatar />
              <ListItemText primary="the nyo ma" />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default RightBar;
