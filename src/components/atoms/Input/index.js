import React from "react";
import { StyledInput } from "./StyledInput";

const Input = ({ value, onChangeFn, name, type = "text" }) => {
  return (
    <StyledInput value={value} onChange={onChangeFn} name={name} type={type} />
  );
};

export default Input;
