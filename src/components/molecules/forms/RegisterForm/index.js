import React from "react";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const registerFormValidSchema = Yup.object().shape({
  login: Yup.string()
    .required("Enter login")
    .min(3, "Login must be at least 3 char"),
  email: Yup.string().email("Invalid email").required("Enter email"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    ),

  acceptTerms: Yup.bool().oneOf([true], "You must accept the terms"),
});

const initialValues = {
  login: "",
  email: "",
  password: "",
  acceptTerms: false,
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

        resetForm();
      }}
      validationSchema={registerFormValidSchema}
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

          <Input
            name="acceptTerms"
            value={values.acceptTerms}
            type="checkbox"
            onChangeFn={handleChange}
          />
          <ErrorMessage name="acceptTerms" />

          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
