import React, { useCallback, useState, useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {
  Container,
  ContainerUsers,
  ContainerListHeroes,
  NameUserContainer,
  ImgUser,
  Welcome,
  UserName,
  ContainerAvatar,
  ContainerTittleHeroes,
  Tittle,
  ListHeroes,
  Filtro,
  TitleFiltro,
} from './styles';

import UserAvatar from '../../assets/ironman2.png';
import HeroeCard from '../../components/Cards/HeroesCard';
import api from '../../services/api';
import { HeroesContext, HeroesProvides } from '../../context/Heroes';

interface HeroesCardsInterface {
  avatar: string;
  defesa: number;
  fraqueza: number;
  id: number;
  poder: number;
  recuperacao: number;
  title: string;
}
const Heroes: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [filtroFavoritos, setFiltroFavoritos] = useState(false);
  const [herois, setHerois] = useState([] as HeroesCardsInterface[]);
  const { heroisFavoritos } = useContext(HeroesContext);

  const listHeroes = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get('/heroes');
    setLoading(false);
    setHerois(data);
  }, []);

  useEffect(() => {
    listHeroes();
  }, []);
  useEffect(() => {
    console.log('Favoritos restantes =========>>>>>>');
  }, [filtroFavoritos]);

  return (
    <Container>
      <ContainerUsers>
        <NameUserContainer>
          <Welcome>Bem vindo,</Welcome>
          <UserName>Novo Heroi</UserName>
        </NameUserContainer>
        <ContainerAvatar>
          <ImgUser source={UserAvatar} />
        </ContainerAvatar>
      </ContainerUsers>
      <ContainerListHeroes>
        <ContainerTittleHeroes>
          <Tittle>Herois Marvel</Tittle>
          <Filtro onPress={() => setFiltroFavoritos(!filtroFavoritos)}>
            <TitleFiltro>Filtrar Favoritos</TitleFiltro>
          </Filtro>
        </ContainerTittleHeroes>

        <ListHeroes>
          {loading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : filtroFavoritos ? (
            heroisFavoritos.map(h => (
              <HeroeCard
                key={h.id}
                name={h.title}
                defesa={h.recuperacao}
                fraqueza={h.fraqueza}
                poder={h.poder}
                recuperacao={h.recuperacao}
                avatar={h.avatar}
                caracteristicasGerais={h}
              />
            ))
          ) : (
            herois.map(h => (
              <HeroeCard
                key={h.id}
                name={h.title}
                defesa={h.recuperacao}
                fraqueza={h.fraqueza}
                poder={h.poder}
                recuperacao={h.recuperacao}
                avatar={h.avatar}
                caracteristicasGerais={h}
              />
            ))
          )}
        </ListHeroes>
      </ContainerListHeroes>
    </Container>
  );
};

export default Heroes;
