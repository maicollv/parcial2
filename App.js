import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Aleatorios from './src/componentes/aleatorios';
import Capturados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Pokemon from './src/componentes/pokemon';
import Usuario from './src/componentes/usuario';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={Lista} />
      <Tab.Screen name="Aleatorios" component={Aleatorios} />
      <Tab.Screen name="Capturados" component={Capturados} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Usuario" component={Usuario} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

