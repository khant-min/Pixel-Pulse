import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import NavBar from "../components/NavBar";
import { Box, Stack } from "@mui/material";
import NewFeed from "../components/NewFeed";
import { useEffect } from "react";
import axiosClient from "../axios-client";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // (async () => {
    //   const res = await axios.post("/api/posts");
    //   console.log("res in main", res);
    // })();
    axiosClient
      .get("/api/posts")
      .then(({ data }) => {
        console.log(data);
      })
      .catch(() => navigate("unauthorized"));
  }, []);
  return (
    <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <SideBar />
        <NewFeed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Main;
