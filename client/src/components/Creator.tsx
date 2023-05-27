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
import { useState } from "react";

export default function Creator() {
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
      <Box p={2} mt={4} boxShadow={3}>
        <Box display="flex" gap={2}>
          <Avatar alt="profile" src={pain} />
          <InputBase
            sx={{
              borderRadius: "1.5rem",
              bgcolor: "lightgray",
              px: 2,
            }}
            placeholder="What's on your mind, Khant?"
            fullWidth
          />
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box display="flex" justifyContent="space-between">
          <Button variant="contained" onClick={() => setOpen(true)}>
            <LiveTv /> Live video
          </Button>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <CollectionsIcon /> Photo/video
          </Button>
          <Button variant="contained" onClick={() => setOpen(true)}>
            <MoodIcon /> Feeling/activity
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
    </>
  );
}
