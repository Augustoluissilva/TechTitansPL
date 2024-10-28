import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home.js';
import Login from '../screens/Login.js';
import Cadastro from '../screens/Cadastro.js';
import Inicial from '../screens/Inicial.js';
import Supinos from '../screens/Supinos.js';
import RedefinirSenha from '../screens/RedefinirSenha.js';
import Favoritos from '../screens/Favoritos.js';
import Agachamentos from '../screens/Agachamentos.js';
import Academia from '../screens/Academia.js';
import Yoga from '../screens/Yoga.js';
import Fitness from '../screens/Fitness.js';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (  
    <Stack.Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Inicial' component={Inicial} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Supinos' component={Supinos} />
      <Stack.Screen name='RedefinirSenha' component={RedefinirSenha} />
      <Stack.Screen name='Favoritos' component={Favoritos} />
      <Stack.Screen name='Agachamentos' component={Agachamentos} />
      <Stack.Screen name='Academia' component={Academia} />
      <Stack.Screen name='Yoga' component={Yoga} />
      <Stack.Screen name='Fitness' component={Fitness} />
    </Stack.Navigator>
  );
}
