import { IconButton, Tooltip } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Reaction } from "../../types/global.types";

interface ClickProps {
  handleClick: (reaction: Reaction) => void;
}

export const Like = ({ handleClick }: ClickProps) => {
  return (
    <Tooltip title="like" placement="top">
      <IconButton onClick={() => handleClick("like")}>
        <ThumbUpIcon />
      </IconButton>
    </Tooltip>
  );
};

export const Love = ({ handleClick }: ClickProps) => (
  <Tooltip title="love" placement="top">
    <IconButton onClick={() => handleClick("love")}>
      <FavoriteIcon />
    </IconButton>
  </Tooltip>
);
export const Star = ({ handleClick }: ClickProps) => (
  <Tooltip title="star" placement="top">
    <IconButton onClick={() => handleClick("star")}>
      <StarIcon />
    </IconButton>
  </Tooltip>
);

export const Sad = ({ handleClick }: ClickProps) => (
  <Tooltip title="sad" placement="top">
    <IconButton onClick={() => handleClick("sad")}>
      <SentimentVeryDissatisfiedIcon />
    </IconButton>
  </Tooltip>
);

export const Angry = ({ handleClick }: ClickProps) => (
  <Tooltip title="angry" placement="top">
    <IconButton onClick={() => handleClick("angry")}>
      <SentimentDissatisfiedIcon />
    </IconButton>
  </Tooltip>
);
