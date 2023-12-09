import { Box, Button } from "@mui/material";
import { useGetPostsQuery } from "../redux/features/api/apiSlice";
import Post from "./Post";
import Creator from "./Creator";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../types";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useEffect } from "react";
import Feeds from "./feeds/Feeds";

const NewFeed = () => {
  const { setToast } = useAuth() as DataContextProps;
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError, error } =
    useGetPostsQuery("bulbasaur");

  // useEffect(() => {
  //   isError &&
  //     function () {
  //       (error as any).status === 403;
  //       navigate("unauthorized");
  //       setToast({
  //         open: true,
  //         status: "error",
  //         message: (error as any).error,
  //       });
  //     };
  // }, [error]);

  const logout = async () => {
    localStorage.removeItem("ACCESS_TOKEN");
    // const result = await axiosClient.post("/auth/logout", {
    //   id: data.user._id,
    // });
    // console.log("result in logout", result);
    setToast({ open: true, status: "success", message: "logout successfully" });
    setTimeout(() => {
      navigate("/auth");
    }, 1000);
  };

  return (
    <Box flex={4} px={10} height="100vh" overflow="scroll" component="section">
      <Creator />

      <Feeds />
      {/* <Button onClick={logout}>Logout</Button> */}

      {/* {data?.map((post: any) => (
        <Post post={post} key={post._id} />
      ))} */}
    </Box>
  );
};

export default NewFeed;
