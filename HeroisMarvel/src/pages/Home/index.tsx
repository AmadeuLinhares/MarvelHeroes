import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LogoImg from '../../assets/avengers.png';
import TextInputComponent from '../../components/Inputs/Text';
import Button from '../../components/Buttons/Login';
import { Container, Tittle, Logo, ContainerInputs } from './styles';

const Home: React.FC = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Logo source={LogoImg} />
            <View>
              <Tittle> Login </Tittle>
            </View>
            <ContainerInputs>
              <TextInputComponent
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="E-mail"
                icon="mail"
                returnKeyType="next"
                onSubmitEditing={() => console.log('')}
              />
              <TextInputComponent
                onSubmitEditing={() => console.log('Clicou')}
                returnKeyType="send"
                secureTextEntry
                placeholder="Senha"
                icon="lock"
                textContentType="password"
              />
              <Button onPress={() => navigation.navigate('Heroes')}>
                Entrar
              </Button>
            </ContainerInputs>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
