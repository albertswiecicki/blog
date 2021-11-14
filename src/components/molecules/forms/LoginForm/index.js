import React from "react";
import { Button } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginWithEmail } from "../../../../utils/Auth";
import {
  emailValidator,
  passwordValidator,
} from "../../../../utils/validation/Rules";
import { TextField } from "@mui/material";

const loginFormValidSchema = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        loginWithEmail(values.email, values.password);
        resetForm();
        // Add notification about successfull login
      }}
      validationSchema={loginFormValidSchema}
    >
      {({ values, handleChange }) => (
        <Form>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange}
          />

          <ErrorMessage name="email" />

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <ErrorMessage name="password" />

          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
