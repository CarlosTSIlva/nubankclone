import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
import { Container, ViewQuestoes, ViewImage, TextName } from "./styles";
import { CircuButtom } from "../CircuButtom";

export const Header = () => {
  return (
    <Container>
      <ViewQuestoes>
        <CircuButtom>
          <Icon name="user" size={18} color="#fff8ff" />
        </CircuButtom>

        <ViewImage>
          <Icon name="eye" size={18} color="#fff8ff" />
          <Icon name="questioncircleo" size={18} color="#fff8ff" />
          <Icon name="mail" size={18} color="#fff8ff" />
        </ViewImage>
      </ViewQuestoes>
      <TextName>Olá, Carlos</TextName>
    </Container>
  );
};
