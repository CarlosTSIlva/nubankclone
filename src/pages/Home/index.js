import React from "react";
import { StatusBar, ScrollView, View } from "react-native";
import { Header } from "../../components/Header";
import { TextName } from "../../components/Header/styles";
import {
  ViewConta,
  ViewValor,
  MeusCartoes,
  ScrollViewInfoCred,
  ViewButton,
  ViewHorizontal,
} from "./styles";

import Icon from "react-native-vector-icons/AntDesign";
import { Menu } from "../../components/Menu";
import { Divider } from "../../components/Divider";
import { InfoCartao } from "../../components/InforCartao";
import { Button } from "../../components/Button";

const Home = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#830ad1" translucent={true} />
      <Header />
      <ViewValor>
        <ViewConta>
          <TextName textColor="#262626">Conta</TextName>
          <Icon name="right" size={15} color="#73717a" />
        </ViewConta>
        <TextName textColor="#262626" size="29px">
          R$ 1.258,25
        </TextName>
      </ViewValor>
      <Menu />
      <MeusCartoes>
        <Icon name="user" size={15} color="#000000" />

        <TextName textColor="#000000" size="15px">
          Meus cartões
        </TextName>
      </MeusCartoes>
      <ScrollViewInfoCred
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <MeusCartoes maxWidth="300px">
          <TextName textColor="#000000" fontWeight="normal" size="16px">
            Você tem até
            <TextName textColor="#830ad1" fontWeight="normal" size="16px">
              {" "}
              R$ 6.500,00{"\n"}
            </TextName>
            disponíveis para empréstimo.
          </TextName>
        </MeusCartoes>

        <MeusCartoes maxWidth="300px">
          <TextName textColor="#000000" fontWeight="normal" size="16px">
            Salva seus amigos da burocracia. {"\n"}
            <TextName textColor="#830ad1" fontWeight="normal" size="16px">
              Faça um convite para o Nubank.
            </TextName>
          </TextName>
        </MeusCartoes>
      </ScrollViewInfoCred>

      <Divider />

      <InfoCartao img="user" titulo="Cartão de crédito">
        <TextName
          paddingBottom="5px"
          paddingTop="5px"
          textColor="#7a7a7b"
          fontWeight="normal"
          size="16px"
        >
          Fatura fechada
        </TextName>
        <TextName paddingBottom="10px" textColor="#262626">
          R$ 55,63
        </TextName>
        <TextName
          paddingBottom="8px"
          textColor="#7a7a7b"
          fontWeight="normal"
          size="16px"
        >
          Vencimento dia 22
        </TextName>
        <ViewButton>
          <Button bgColor="#ff3a61">
            <TextName textColor="#fff"> Pagar fatura</TextName>
          </Button>
          <Button width="28%" marginLeft="10px">
            <TextName textColor="#000">Parcelar</TextName>
          </Button>
        </ViewButton>
      </InfoCartao>

      <Divider />

      <InfoCartao img="user" titulo="Empréstimo">
        <TextName textColor="#7a7a7b" fontWeight="normal" size="16px">
          Valor dinheiro de até
        </TextName>

        <TextName textColor="#7a7a7b" fontWeight="normal" size="16px">
          R$ 6.500,00
        </TextName>
      </InfoCartao>

      <Divider />

      <InfoCartao img="user" titulo="Seguro de vida">
        <TextName textColor="#7a7a7b" fontWeight="normal" size="16px">
          Cohneça Nubank Vida: um seguro simples e que cabe no bolso
        </TextName>
      </InfoCartao>

      <Divider />

      <View style={{ paddingLeft: 25 }}>
        <TextName textColor="#262626">Descubra mais</TextName>
      </View>
      <ViewHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>
        <MeusCartoes flexDirection="column" maxWidth="300px">
          <TextName paddingBottom="10px" textColor="#262626">
            Indique seus amigos
          </TextName>

          <TextName
            paddingBottom="35px"
            textColor="#000000"
            fontWeight="normal"
            size="16px"
          >
            Mostre aos seus amigos como é fácil ter uma vida sem burocracia.
          </TextName>
          <ViewButton>
            <Button width="53%" bgColor="#830ad1">
              <TextName textColor="#fff" size="18px">
                Indicar amigos
              </TextName>
            </Button>
          </ViewButton>
        </MeusCartoes>
        <MeusCartoes flexDirection="column" maxWidth="300px">
          <TextName paddingBottom="10px" textColor="#262626">
            WhatsApp
          </TextName>

          <TextName
            paddingBottom="15px"
            textColor="#000000"
            fontWeight="normal"
            size="16px"
          >
            Pagamentos seguors, rápidos e sem tarifa. A experiência Nubank sem
            nem sair da conversa.
          </TextName>
          <ViewButton>
            <Button width="53%" bgColor="#830ad1">
              <TextName textColor="#fff" size="18px">
                Quero conhecer
              </TextName>
            </Button>
          </ViewButton>
        </MeusCartoes>
      </ViewHorizontal>
    </ScrollView>
  );
};

export default Home;
