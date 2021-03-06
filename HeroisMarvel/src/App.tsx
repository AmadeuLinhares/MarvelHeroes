import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { HeroesProvides } from './context/Heroes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <HeroesProvides>
      <Routes />
    </HeroesProvides>
  </NavigationContainer>
);

export default App;
