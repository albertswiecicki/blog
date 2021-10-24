import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import { register } from "../../../../utils/Auth";
import {
  emailValidator,
  loginValidator,
  passwordValidator,
  termsValidator,
} from "../../../../utils/validation/Rules";
// ToDo: require a different password than nick or email

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
          <Input
            name="login"
            value={values.login}
            onChangeFn={handleChange}
            placeholder="login"
          />
          {/* ToDo remove, it's here just to show how formatting works */}
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
