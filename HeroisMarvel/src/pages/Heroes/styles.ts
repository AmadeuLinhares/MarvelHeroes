import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

import { isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: ${isIphoneX() ? 40 : 0}px;
`;
export const ContainerUsers = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #28262e;
  padding: 10px 30px 0 30px;
`;

export const NameUserContainer = styled.View``;

export const Welcome = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: #999591;
  margin-bottom: 10px;
`;
export const UserName = styled.Text`
  font-size: 26px;
  font-family: 'RobotoSlab-Medium';
  color: #ff9000;
`;

export const ContainerAvatar = styled.View`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 100px;
`;
export const ImgUser = styled.Image`
  width: 56px;
  height: 56px;
`;

export const ContainerListHeroes = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex: 4;
  padding: 0 30px;
`;

export const ContainerTittleHeroes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 0 24px 0;
`;

export const Tittle = styled.Text`
  font-size: 25px;
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
`;

export const ListHeroes = styled.ScrollView`
  width: 100%;
`;
export const Filtro = styled.TouchableOpacity``;
export const TitleFiltro = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
`;
