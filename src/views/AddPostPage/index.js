import React from "react";
import AddPostForm from "../../components/molecules/forms/AddPostForm";
// add sort option meta and via tags
// default by creation time
const AddPostPage = () => {
  return (
    <>
      <h1>Add Post Page</h1>
      <h3>
        add here all fields from post details + add preview + think how deal
        with different languages
      </h3>
      <AddPostForm />
    </>
  );
};

export default AddPostPage;
