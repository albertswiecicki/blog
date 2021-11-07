import React from "react";
import DoesntExistPage from "../../../views/DoesntExistPage";
import parse from "html-react-parser";

const PostDetails = ({ post }) => {
  if (!post) {
    return <DoesntExistPage />;
  }
  return (
    <>
      <h1>PostDetails page for post with id: {post.id}</h1>
      <img src={post.imageUrl} alt={post.imageAlt} />
      <br />
      {parse(post.body)}
    </>
  );
};

export default PostDetails;
