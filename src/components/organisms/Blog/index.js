import React from "react";
import Post from "../../molecules/Post";

// it will be based on material ui grid system
const Blog = () => {
  return (
    <div>
      {/* posts.map(id => <col = 4> <Post postId=id/></col>) */}
      <Post postId={1234} />
    </div>
  );
};

export default Blog;
