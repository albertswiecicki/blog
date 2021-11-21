import React from "react";
import DoesntExistPage from "../../../views/DoesntExistPage";
import parse from "html-react-parser";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const PostDetails = ({ post }) => {
  const theme = useTheme();
  console.log("created at", post.createdAt);

  const sx = {
    page: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.primary.dark,
    },
    image: {
      display: "flex",
      justifyContent: "center",
      color: "#550055",
    },
  };

  if (!post) {
    return <DoesntExistPage />;
  }
  return (
    <Container sx={sx.page}>
      <Typography sx={sx.title}>
        <h1>{post.title}</h1>
      </Typography>

      <Typography sx={sx.image}>
        <img src={post.imageUrl} alt={post.imageAlt} />
      </Typography>
      <br />
      {parse(post.body)}
    </Container>
  );
};

export default PostDetails;
