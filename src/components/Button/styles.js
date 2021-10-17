import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || "#f0f1f5"};
  border-radius: 12px;
  width: ${(props) => props.width || "38%"};
  align-items: center;
  margin-left: ${(props) => props.marginLeft || "0px"};
`;
