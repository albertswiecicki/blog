import React from "react";
import Post from "../../molecules/Post";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// on bigger screens (ultrawide) we might add some padding on sides
const Blog = () => {
  const posts = useSelector(({ blog }) => blog.posts).sort(
    (first, second) =>
      parseFloat(second.createdAt.seconds) - parseFloat(first.createdAt.seconds)
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {posts.map((post, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={idx}>
            <Post post={post} key={idx} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
