import React from "react";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const loginFormValidSchema = Yup.object().shape({
  login: Yup.string()
    .required("Enter login")
    .min(3, "Login must be at least 3 char"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      regex,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    ),
});

const initialValues = {
  login: "",
  password: "",
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
      validationSchema={loginFormValidSchema}
    >
      {({ values, handleChange }) => (
        <Form>
          <Input
            name="login"
            value={values.login}
            onChangeFn={handleChange}
            placeholder="login"
          />
          <div style={{ color: "yellow" }}>
            <ErrorMessage name="login" />
          </div>

          <Input
            name="password"
            value={values.password}
            type="password"
            onChangeFn={handleChange}
            placeholder="password"
          />
          <ErrorMessage name="password" />

          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
