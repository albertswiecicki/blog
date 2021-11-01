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

const Post = ({ post }) => {
  let history = useHistory();

  const redirectToDetailPage = () => {
    history.push(`${routes.postPage}/${post.id}`);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={redirectToDetailPage}>
        <CardHeader title={post.title} subheader={post.date} />
        <CardMedia
          component="img"
          height="194"
          image={post.imageUrl}
          alt={post.imageAlt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body.replace(/<[^>]*>?/gm, "")}
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
