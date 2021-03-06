import React, { useState } from "react";
import { Formik, Form } from "formik";
import PostDetails from "../../PostDetails";
import { uploadPost } from "../../../../firestore";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { routes } from "../../../../routing/routes";
import { useHistory } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import ReroutingPrevention from "../../ReroutingPrevention";
import AddImagesForm from "../AddImagesForm";
import { Container } from "@mui/material";
const initialValues = {
  title: "",
  body: "",
  imageUrl: "",
  imageAlt: "There should be an image",
  language: "en",
};

const AddPostForm = () => {
  const [postPreview, setPostPreview] = useState(initialValues);
  const [shouldBlockNavigation, setShouldBlockNavigation] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user = useSelector(({ auth }) => auth.user);
  let history = useHistory();
  if (!user || user.isAdmin !== true) {
    history.push(routes.doesntExistPage);
  }

  return (
    <>
      <ReroutingPrevention shouldBlockNavigation={shouldBlockNavigation} />
      <AddImagesForm />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setPostPreview({
            ...values,
            createdAt: { seconds: new Date().getTime() / 1000 },
            id: "preview_test_id",
          });
          setShouldBlockNavigation(true);
        }}
      >
        {({ values, handleChange }) => (
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Form>
              <TextField
                id="outlined-basic"
                label="Blog title"
                variant="outlined"
                name="title"
                value={values.title}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />

              <TextField
                id="outlined-basic"
                label="imageUrl"
                variant="outlined"
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />

              <TextField
                id="outlined-basic"
                label="imageAlt"
                variant="outlined"
                name="imageAlt"
                value={values.imageAlt}
                onChange={handleChange}
                sx={{ width: "100%" }}
              />

              <TextField
                name="body"
                value={values.body}
                onChange={handleChange}
                placeholder="body"
                // id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={22}
                sx={{ width: "100%" }}
                // defaultValue="123 Value"
              />
              <Button type="submit">Preview</Button>
            </Form>
          </Container>
        )}
      </Formik>
      {postPreview.title !== "" ? (
        <>
          <PostDetails post={postPreview} />
          <Button
            type="submit"
            onClick={() => {
              uploadPost(postPreview);
              setShouldBlockNavigation(false);
              handleClickOpen();
            }}
          >
            Post
          </Button>
        </>
      ) : (
        <></>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your post has been sent"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your post has been successfully posted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddPostForm;
