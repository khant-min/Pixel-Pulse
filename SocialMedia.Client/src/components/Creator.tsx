import {
  Avatar,
  Box,
  Button,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { LiveTv } from "@mui/icons-material";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoodIcon from "@mui/icons-material/Mood";
import pain from "../public/assets/pain.jpg";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Textarea from "@mui/joy/Textarea";
import { useAddPostsMutation } from "../redux/features/api/apiSlice";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../types";
import ToastAlert from "./miscellaneous/ToastAlert";

export default function Creator() {
  const [postOpen, setPostOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [postText, setPostText] = useState<string>("");

  const { toast, setToast } = useAuth() as DataContextProps;
  const [addPosts, { isSuccess, isError, isLoading }] = useAddPostsMutation();
  // const [addPosts, test] = useAddPostsMutation();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // const handleClick = () => {
  //   try {
  //     addPosts({ postText });
  //     return setToast({
  //       open: true,
  //       status: "success",
  //       message: JSON.stringify("Post created successfully"),
  //     });
  //   } catch (err) {
  //     return setToast({
  //       open: true,
  //       status: "error",
  //       message: "Error Occured!",
  //     });
  //   } finally {
  //     setPostOpen(false);
  //   }
  // };

  const handleClick = () => {
    console.log("value: ", postText);
    setPostText("");
    setPostOpen(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <ToastAlert />
      <Box p={2} mt={4} boxShadow={3}>
        <Box display="flex" gap={2}>
          <Avatar alt="profile" src={pain} />
          {/* <InputBase
            style={{ cursor: "pointer" }}
            onClick={() => setPostOpen(true)}
            sx={{
              borderRadius: "1.5rem",
              bgcolor: "lightgray",
              px: 2,
            }}
            placeholder="Post something..."
            fullWidth
          /> */}
          <div className="post-news" onClick={() => setPostOpen(true)}>
            Post something...
          </div>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button variant="outlined" onClick={() => setOpen(true)}>
            <LiveTv style={{ color: "#ff0000", marginRight: "10px" }} /> Live
            video
          </Button>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            <CollectionsIcon
              style={{ color: "#00ff00", marginRight: "10px" }}
            />{" "}
            Photo/video
          </Button>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            <MoodIcon style={{ color: "#ffff00", marginRight: "10px" }} />{" "}
            Activity
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </Box>
      </Modal>
      <Modal
        open={postOpen}
        onClose={() => setPostOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create post
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: "10%" }}
              onClick={() => setPostOpen(false)}
            >
              <CloseIcon />
            </Button>
          </Box>
          <Textarea
            placeholder="What's on your mind, Khant…"
            minRows={4}
            sx={{ my: 3 }}
            value={postText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setPostText(e.target.value)
            }
          />

          <Button fullWidth variant="contained" onClick={handleClick}>
            Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
