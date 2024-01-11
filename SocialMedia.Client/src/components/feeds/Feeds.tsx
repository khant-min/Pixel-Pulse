import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Feeds() {
  return (
    <div style={{ margin: "10px" }}>
      <Card style={{ padding: "60px 20px" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>K</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          style={{ padding: "10px" }}
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            harum veniam facere id? Reprehenderit animi, minus, molestias
            perferendis repellendus autem cum dolorum et illo molestiae magni
            saepe sit officiis, repellat quam veniam architecto? At corrupti
            numquam quisquam molestiae pariatur officia?
          </Typography>
        </CardContent>
        <div className="social-reactions">
          <div className="divided-line">
            <div className="reactions">
              <FavoriteIcon />
              <p>Love</p>
            </div>
            <div className="comments">
              <ForumRoundedIcon />
              <p>Comments</p>
            </div>
            <div className="share">
              <ShareIcon />
              <p>Share</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
