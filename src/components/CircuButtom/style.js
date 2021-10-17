import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 50px;
  background-color: ${(props) => props.bgColor || "#9b3bda"};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
