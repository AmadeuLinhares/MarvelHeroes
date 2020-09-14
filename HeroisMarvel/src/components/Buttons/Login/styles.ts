import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
}
export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 50px;
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

export const TextButton = styled.Text`
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
