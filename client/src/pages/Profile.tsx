import { Box, Container, Divider } from "@mui/material";
import ProfilePhoto from "../components/profile/ProfilePhoto";
import ProfileContent from "../components/profile/ProfileContent";
import styled from "@emotion/styled";
import NavBar from "../components/NavBar";

const StyledBox = styled("div")({
  color: "#fff",
  maxWidth: "1000px",
  margin: "auto",
  padding: 50,
  display: "flex",
  flexDirection: "column",
  gap: 40,
});

const Profile = () => {
  return (
    <Box bgcolor="#334" minHeight="100vh">
      <NavBar />
      <StyledBox>
        <ProfilePhoto />
        <ProfileContent />
      </StyledBox>
    </Box>
  );
};

export default Profile;
