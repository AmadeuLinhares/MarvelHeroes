import React, { useCallback, useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { HeroesContext } from '../../../context/Heroes';
import {
  Container,
  Avatar,
  ContainerAvatar,
  ContainerInfos,
  TittleInfo,
  FavoritesContainer,
  ContainerInfosAdd,
  IconComponent,
  TextInfoAdd,
  ContainerHabilits,
} from './styles';
import AvatarPhoto from '../../../assets/groot.png';

interface HeroesCardsInterface {
  avatar: string;
  defesa: number;
  fraqueza: number;
  id: number;
  poder: number;
  recuperacao: number;
  title: string;
}

interface Personagem {
  name: string;
  avatar?: string;
  poder: number;
  fraqueza: number;
  defesa: number;
  recuperacao: number;

  caracteristicasGerais: HeroesCardsInterface;
}

const HeroeCard: React.FC<Personagem> = ({
  name,
  avatar,
  recuperacao,
  poder,
  fraqueza,
  defesa,
  caracteristicasGerais,
}) => {
  const [favorito, setFavorito] = useState(false);
  const {
    setHeroisFavoritos,
    heroisFavoritos,
    deleteHeroisFavoritos,
  } = useContext(HeroesContext);

  const AddFavoriteHero = useCallback(
    data => {
      if (data) {
        console.log('Dentro do componente', caracteristicasGerais);
        setHeroisFavoritos(caracteristicasGerais);
      } else {
        deleteHeroisFavoritos(caracteristicasGerais.id);
      }
    },
    [
      caracteristicasGerais,
      favorito,
      deleteHeroisFavoritos,
      setHeroisFavoritos,
    ],
  );

  return (
    <Container>
      <ContainerAvatar>
        <Avatar source={AvatarPhoto} />
        {/* <Avatar source={AvatarPhoto} /> */}
      </ContainerAvatar>
      <ContainerInfos>
        <TittleInfo>{name}</TittleInfo>
        <ContainerHabilits>
          <ContainerInfosAdd>
            <IconComponent name="zap" color="#FF9000" size={16} />
            <TextInfoAdd>{poder}</TextInfoAdd>
          </ContainerInfosAdd>
          <ContainerInfosAdd>
            <IconComponent name="zap-off" color="#FF9000" size={16} />
            <TextInfoAdd>{fraqueza}</TextInfoAdd>
          </ContainerInfosAdd>
        </ContainerHabilits>
        <ContainerHabilits>
          <ContainerInfosAdd>
            <IconComponent name="shield-off" color="#FF9000" size={16} />
            <TextInfoAdd>{defesa}</TextInfoAdd>
          </ContainerInfosAdd>
          <ContainerInfosAdd>
            <IconComponent name="heart" color="#FF9000" size={16} />
            <TextInfoAdd>{recuperacao}</TextInfoAdd>
          </ContainerInfosAdd>
        </ContainerHabilits>
      </ContainerInfos>
      <FavoritesContainer
        onPress={() => {
          setFavorito(!favorito);
          AddFavoriteHero(!favorito);
        }}
      >
        <IconComponent
          name="heart"
          color={favorito ? 'red' : '#28262E'}
          size={26}
        />
      </FavoritesContainer>
    </Container>
  );
};

export default HeroeCard;
