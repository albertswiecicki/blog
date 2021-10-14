import React from "react";
import { StyledButton } from "./StyledButton";

const Button = ({ children, onClickFn, type = "button" }) => {
  return (
    <StyledButton onClick={onClickFn} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
