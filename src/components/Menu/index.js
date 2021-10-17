import React, { useState } from "react";
import { View } from "react-native";
import { Container, MenuView } from "./style";
import { TextName } from "../Header/styles";
import { CircuButtom } from "../CircuButtom";
import Icon from "react-native-vector-icons/AntDesign";

export const Menu = () => {
  const [menu] = useState([
    { descricao: "Área Pix", icon: "user" },
    { descricao: "Pagar", icon: "user" },
    { descricao: "Transferir", icon: "user" },
    { descricao: "Depositar", icon: "user" },
    { descricao: "Pegar emprestado", icon: "user" },
    { descricao: "Recarga de celular", icon: "user" },
    { descricao: "Cobrar", icon: "user" },
    { descricao: "Doação", icon: "user" },
    { descricao: "Transferir Internac.", icon: "user" },
    { descricao: "Encontrar atalhos", icon: "user" },
  ]);

  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      {menu.map((itemMenu, index) => {
        return (
          <MenuView key={index}>
            <CircuButtom bgColor="#f0f1f5">
              <Icon name={itemMenu.icon} size={18} color="#000000" />
            </CircuButtom>
            <TextName textColor="#262626" size="15px" align="center">
              {itemMenu.descricao}
            </TextName>
          </MenuView>
        );
      })}
    </Container>
  );
};
