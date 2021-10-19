import React from "react";
import { StyledInput } from "./StyledInput";

const Input = ({ value, onChangeFn, name, type = "text", placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChangeFn}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
