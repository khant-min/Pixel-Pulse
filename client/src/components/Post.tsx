import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Modal,
  Button,
  Tooltip,
} from "@mui/material";
// import pain from "../public/assets/pain.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useState } from "react";
import Reacts from "./miscellaneous/Reacts";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/joy";
import SendIcon from "@mui/icons-material/Send";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useAppSelector } from "../redux/store/store";
import { reaction } from "../redux/features/ActiveReactions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const Post = ({ post }: { post: any }) => {
  const [open, setOpen] = useState<boolean>(false);

  const postReaction = useAppSelector(reaction);

  let react;
  switch (postReaction) {
    case "like":
      react = <ThumbUpIcon fontSize="medium" />;
      break;
    case "love":
      react = <FavoriteIcon fontSize="medium" />;
      break;
    case "star":
      react = <StarIcon fontSize="medium" />;
      break;
    case "sad":
      react = <SentimentVeryDissatisfiedIcon fontSize="medium" />;
      break;
    case "angry":
      react = <SentimentDissatisfiedIcon fontSize="medium" />;
      break;
    default:
      react = "Invalid reaction";
      break;
  }

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

  return (
    <>
      <Box>
        <Card sx={{ borderRadius: "md", my: 6 }}>
          <CardHeader
            avatar={<Avatar>K</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          ></CardHeader>
          <CardContent>{post.postText}</CardContent>
          {/* <CardMedia component="img" height="700" image={pain} /> */}
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Tooltip title={<Reacts />} placement="top-start">
              <IconButton aria-label="like">
                {react} {postReaction}
              </IconButton>
            </Tooltip>
            <IconButton aria-label="comment" onClick={() => setOpen(true)}>
              <ModeCommentIcon fontSize="medium" /> Comment
            </IconButton>
            <IconButton aria-label="share">
              <ReplyOutlinedIcon fontSize="large" /> Share
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Creator's Post
            </Typography>
            <Button variant="contained" onClick={() => setOpen(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Box mt="200px">
            <Typography>Nobody's comment yet</Typography>
            <Input placeholder="Write a comment..." variant="outlined" />
            <Box>
              <IconButton>
                <EmojiEmotionsIcon />
              </IconButton>
              <IconButton>
                <PhotoCameraIcon />
              </IconButton>
              <IconButton>
                <PhotoLibraryIcon />
              </IconButton>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Post;
