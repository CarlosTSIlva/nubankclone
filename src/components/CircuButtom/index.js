import { Container } from "./style";
import React from "react";
export const CircuButtom = ({ children, bgColor }) => {
  return <Container bgColor={bgColor}>{children}</Container>;
};
