import styled from "styled-components/native";

export const ViewConta = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
  font-size: 505px;
`;

export const ViewValor = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`;

export const MeusCartoes = styled.View`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  text-align: start;
  background: red;
  margin: 20px 20px 0px 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f1f5;
  max-width: ${(props) => props.maxWidth || "auto"};
`;

export const ScrollViewInfoCred = styled.ScrollView``;

export const ViewButton = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ViewHorizontal = styled.ScrollView`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;
