import React from 'react';
import { Text } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, TextButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  color?: string;
  children: string;
}

const LoginButton: React.FC<ButtonProps> = ({ children, color, ...rest }) => {
  return (
    <Container {...rest} color={color}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default LoginButton;
