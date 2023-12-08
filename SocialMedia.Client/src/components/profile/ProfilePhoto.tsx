import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import pain from "../../public/assets/pain.jpg";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const StyledBox = styled("div")({
  backgroundColor: "#136",
  display: "flex",
  justifyContent: "space-between",
  gap: 50,
  padding: 20,
  borderRadius: 10,
});

const ProfilePhoto = () => {
  return (
    <StyledBox>
      <Box display="flex" alignItems="center" gap={3}>
        <Avatar src={pain} sx={{ width: "200px", height: "200px" }} />
        <Box>
          <Typography fontSize="2rem">Khant Min</Typography>
          <Typography>1.2k friends</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box display="flex" alignItems="end" gap={4} mb={4}>
          <Button variant="contained">
            <AddIcon /> <Typography>Add Post</Typography>
          </Button>
          <Button variant="outlined">
            <EditIcon /> <Typography>Edit Profile</Typography>
          </Button>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default ProfilePhoto;
