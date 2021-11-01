import React from "react";
import DoesntExistPage from "../../../views/DoesntExistPage";
import parse from "html-react-parser";

const PostDetails = ({ post }) => {
  if (!post) {
    return <DoesntExistPage />;
  }
  return (
    <>
      <h1>PostDetails Page :) for post {post.id}</h1>
      <h3>{parse(post.body)}</h3>
    </>
  );
};

export default PostDetails;
