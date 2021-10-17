import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #820ad1;
  height: 45%;
  width: 100%;
  height: 180px;
  padding: 25px;
`;

export const ViewQuestoes = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -50px;
`;

export const ViewImage = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`;

export const TextName = styled.Text`
  color: white;
  color: ${(props) => props.textColor || "white"};
  font-size: ${(props) => props.size || "19px"};
  text-align: ${(props) => props.align || "left"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
`;
