// en este segmento se integra el menu principal con sus llamados de consumo de api
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard2Screen from '../screens/Dashboard2Screen';
import AssistantWelcomeScreen from '../screens/AssistantWelcomeScreen';
import ProfileStack from './ProfileStack'; // Importa el nuevo stack

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4c3b90',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
  // aqui se llama el chat boot, por si el usuario tiene alguna duda
      <Drawer.Screen name="Dashboard" component={Dashboard2Screen} />
      <Drawer.Screen name="Asistente Virtual" component={AssistantWelcomeScreen} />
      <Drawer.Screen name="Configuración" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

