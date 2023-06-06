import { Box } from "@mui/material";
import { useGetPostsQuery } from "../redux/features/api/apiSlice";
import Post from "./Post";
import Creator from "./Creator";

const NewFeed = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetPostsQuery("bulbasaur");

  return (
    <Box flex={4} px={10} height="100vh" overflow="scroll" component="section">
      <Creator />
      {data?.map((post: any) => (
        <Post post={post} key={post._id} />
      ))}
    </Box>
  );
};

export default NewFeed;
