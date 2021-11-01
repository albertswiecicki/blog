import React from "react";
import PostDetails from "../../components/molecules/PostDetails";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams();
  const posts = useSelector(({ blog }) => blog.posts);
  const post = posts.find((post) => post.id === postId);
  return <PostDetails post={post} />;
};

export default PostPage;
