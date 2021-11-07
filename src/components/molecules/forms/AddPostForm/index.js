import React, { useState } from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import PostDetails from "../../PostDetails";

const initialValues = {
  title: "",
  body: "",
  imageUrl: "",
  imageAlt: "There should be an image",
  language: "en",
};

const AddPostForm = () => {
  const [post, setPost] = useState(initialValues);
  const uploadPost = () => {
    console.log("dbg uploading post: ", post);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setPost({
            ...values,
            createdAt: { seconds: new Date().getTime() / 1000 },
            id: "preview_test_id",
          });
          console.log("the post preview should refreash");

          // AddNewPost / PushNewPost
          //   resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              name="title"
              value={values.title}
              onChangeFn={handleChange}
              placeholder="title"
            />
            <Input
              name="body"
              value={values.body}
              onChangeFn={handleChange}
              placeholder="body"
            />

            <Input
              name="imageUrl"
              value={values.imageUrl}
              onChangeFn={handleChange}
              placeholder="imgageUrl"
            />

            <Input
              name="imageAlt"
              value={values.imageAlt}
              onChangeFn={handleChange}
            />

            <Button type="submit">Preview</Button>
          </Form>
        )}
      </Formik>
      <PostDetails post={post} />

      <Button type="submit" onClickFn={uploadPost}>
        Post
      </Button>
    </>
  );
};

export default AddPostForm;
