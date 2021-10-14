import React from "react";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";

const RegisterForm = () => {
  return (
    <form>
      <Input name="login" />
      <Input name="email" type="email" />
      <Input name="password" type="password" />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
