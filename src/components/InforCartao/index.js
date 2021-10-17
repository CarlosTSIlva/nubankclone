import React from "react";
import { View } from "react-native";
import { ViewConta } from "../../pages/Home/styles";
import { TextName } from "../Header/styles";
import Icon from "react-native-vector-icons/AntDesign";

import { Container } from "./styles";

export const InfoCartao = ({ img, titulo, children }) => {
  return (
    <Container>
      <View>
        <Icon name={img} size={18} color="#000" />
        <ViewConta>
          <TextName textColor="#262626">{titulo}</TextName>
          <Icon name="right" size={15} color="#73717a" />
        </ViewConta>
      </View>
      {children}
    </Container>
  );
};
