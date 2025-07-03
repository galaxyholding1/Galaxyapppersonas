// en este segmento se inicia la integracion de los submenues de cambios en el perfil
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus pantallas relacionadas con el perfil
import ProfileScreen from '../screens/ProfileScreen'; // Vista principal del perfil
import ChangePhotoOptionsScreen from '../screens/ChangePhotoOptionsScreen'; // Submenú con las 4 opciones
import AddAvatarScreen from '../screens/AddAvatarScreen';
import TakeSelfieScreen from '../screens/TakeSelfieScreen';
// Agrega aquí las otras como SeleccionarFotoScreen o CrearIA si las tienes

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="OpcionesFoto" component={ChangePhotoOptionsScreen} />
      <Stack.Screen name="AñadirAvatar" component={AddAvatarScreen} />
      <Stack.Screen name="TomarSelfie" component={TakeSelfieScreen} />
      {/* Agrega más si es necesario */}
    </Stack.Navigator>
  );
};

export default ProfileStack;
