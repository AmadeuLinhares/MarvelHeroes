import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Heroes from '../pages/Heroes';

const Authenticated = createStackNavigator();

const AuthenticatedRoutes: React.FC = () => (
  <Authenticated.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#312e38' },
      headerShown: false,
    }}
  >
    <Authenticated.Screen name="Marvel Heroes" component={Home} />
    <Authenticated.Screen name="Heroes" component={Heroes} />
  </Authenticated.Navigator>
);

export default AuthenticatedRoutes;
