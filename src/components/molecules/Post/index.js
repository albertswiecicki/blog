import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea } from "@mui/material";
import { routes } from "../../../routing/routes";
import { useHistory } from "react-router-dom";

const MAX_TITLE_LENGHT = 40;
const MAX_BODY_LENGHT = 120;
const IMAGE_HEIGHT = 300;

const convert = (text, maxLenght) => {
  let convertedText = text.replace(/<[^>]*>?/gm, "");
  if (convertedText.length > maxLenght) {
    convertedText = convertedText.substring(0, maxLenght);
    return convertedText.substring(0, convertedText.lastIndexOf(" ")) + " ...";
  }
  return convertedText;
};

const Post = ({ post }) => {
  let history = useHistory();

  const redirectToDetailPage = () => {
    history.push(`${routes.postPage}/${post.id}`);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={redirectToDetailPage}>
        <CardHeader
          title={convert(post.title, MAX_TITLE_LENGHT)}
          subheader={new Date(post.createdAt.seconds * 1000).toDateString()}
        />
        <CardMedia
          component="img"
          height={IMAGE_HEIGHT}
          image={post.imageUrl}
          alt={post.imageAlt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {convert(post.body, MAX_BODY_LENGHT)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
