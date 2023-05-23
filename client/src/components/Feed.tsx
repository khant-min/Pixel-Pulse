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
} from "@mui/material";
import pain from "../public/assets/pain.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useState } from "react";
import Creator from "./Creator";

const Feed = () => {
  const [open, setOpen] = useState<boolean>(false);

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
      <Box flex={4} px={10}>
        <Creator />
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
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              optio vitae ullam ipsum porro nostrum consequuntur. Accusamus
              nemo, sint odio saepe, sit impedit inventore eveniet recusandae
              asperiores, qui adipisci quas.
            </Typography>
          </CardContent>
          <CardMedia component="img" height="400" image={pain} />
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              aria-label="like"
              sx={{
                ":hover": {
                  bgcolor: "gray[400]",
                },
              }}
            >
              <ThumbUpIcon fontSize="medium" /> Like
            </IconButton>
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
    </>
  );
};

export default Feed;
