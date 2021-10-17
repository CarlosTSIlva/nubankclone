import React from "react";
import { Container } from "./styles";

export const Button = ({ children, bgColor, width, marginLeft }) => {
  return (
    <Container bgColor={bgColor} width={width} marginLeft={marginLeft}>
      {children}
    </Container>
  );
};
