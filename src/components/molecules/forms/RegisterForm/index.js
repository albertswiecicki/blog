import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { register } from "../../../../utils/Auth";
import Checkbox from "@mui/material/Checkbox";

import {
  emailValidator,
  loginValidator,
  passwordValidator,
  termsValidator,
} from "../../../../utils/validation/Rules";
// ToDo: require a different password than nick or email

// ToDo: rewrite errors according to:
// https://formik.org/docs/examples/with-material-ui

const registerFormValidSchema = Yup.object().shape({
  login: loginValidator,
  email: emailValidator,
  password: passwordValidator,
  acceptTerms: termsValidator,
});

const initialValues = {
  login: "",
  email: "",
  password: "",
  acceptTerms: false,
};

//ToDo transfer to the main page after registering

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        register(values.email, values.password, values.login, values.login);
        resetForm();
      }}
      validationSchema={registerFormValidSchema}
    >
      {({ values, handleChange }) => (
        <Form>
          <TextField
            id="outlined-basic"
            label="login"
            variant="outlined"
            name="login"
            value={values.login}
            onChange={handleChange}
          />

          {/* ToDo remove, it's here just to show how formatting works */}
          <div style={{ color: "yellow" }}>
            <ErrorMessage name="login" />
          </div>

          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange}
            // error={touched.email && Boolean(errors.email)}
            // helperText={touched.email && errors.email}
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

          <Checkbox
            name="acceptTerms"
            value={values.acceptTerms}
            type="checkbox"
            onChange={handleChange}
          />

          <ErrorMessage name="acceptTerms" />

          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
