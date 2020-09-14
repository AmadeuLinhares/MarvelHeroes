import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 90 : 40}px;
`;

export const Tittle = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  margin: 60px 0 24px 0;
`;
export const Logo = styled.Image`
  width: 140px;
  height: 160px;
`;
export const ContainerInputs = styled.View`
  width: 100%;
`;
