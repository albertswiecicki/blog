import React from "react";
import DoesntExistPage from "../../../views/DoesntExistPage";
import parse from "html-react-parser";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";

const PostDetails = ({ post }) => {
  const theme = useTheme();

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
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      color: "#550055",
      maxWidth: "1",
    },
  };

  if (!post) {
    return <DoesntExistPage />;
  }
  return (
    <Container sx={sx.page}>
      <Typography variant="h2" sx={sx.title}>
        {post.title}
      </Typography>
      <Box
        component="img"
        src={post.imageUrl}
        alt={post.imageAlt}
        // sx={{ maxWidth: { xs: "100%", md: 250 } }}
        // sx={{ maxWidth: "100%" }}
        sx={sx.image}
      ></Box>
      <br />
      {parse(post.body)}
    </Container>
  );
};

export default PostDetails;
