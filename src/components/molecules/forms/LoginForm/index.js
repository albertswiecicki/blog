import React from "react";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginWithEmail } from "../../../../utils/Auth";
import {
  emailValidator,
  passwordValidator,
} from "../../../../utils/validation/Rules";

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
      }}
      validationSchema={loginFormValidSchema}
    >
      {({ values, handleChange }) => (
        <Form>
          <Input
            name="email"
            value={values.email}
            type="email"
            onChangeFn={handleChange}
            placeholder="email"
          />
          <ErrorMessage name="email" />

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
