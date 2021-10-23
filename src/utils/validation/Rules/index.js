import * as Yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const loginValidator = Yup.string()
  .required("Enter login")
  .min(3, "Login must be at least 3 char");

export const emailValidator = Yup.string()
  .email("Invalid email")
  .required("Enter email");

export const passwordValidator = Yup.string()
  .required("Enter password")
  .matches(
    passwordRegex,
    "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
  );

export const termsValidator = Yup.bool().oneOf(
  [true],
  "You must accept the terms"
);
