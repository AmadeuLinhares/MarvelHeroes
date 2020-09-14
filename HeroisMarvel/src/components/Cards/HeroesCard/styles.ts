import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 112px;
  padding: 16px 20px;
  background-color: #3e3b47;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 16px;
`;
export const ContainerAvatar = styled.View`
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: 100px;
  margin-right: 10px;
`;
export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
`;

export const ContainerHabilits = styled.View`
  align-content: stretch;
  flex-direction: row;
  margin: 0 10px 5px 0;
`;
export const ContainerInfos = styled.View``;
export const TittleInfo = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  margin-bottom: 12px;
`;

export const ContainerInfosAdd = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
`;
export const IconComponent = styled(Icon)`
  margin-right: 10px;
`;
export const TextInfoAdd = styled.Text`
  font-size: 12px;
  font-family: 'RobotoSlab-Medium';
  color: #999591;
`;

export const FavoritesContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0%;
  right: 0%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 5px;
`;
