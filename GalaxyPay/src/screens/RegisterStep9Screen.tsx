import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'; // Importación de componentes nativos
import { Ionicons } from '@expo/vector-icons'; // Iconos de Ionicons (Expo)
import GalaxyLogo from './assets/galaxy_logo1.svg'; // Logo en formato SVG

// Componente funcional que representa la pantalla final del registro (paso 9)
export default function RegisterStep9Screen() {
  // Hook que detecta si el sistema está en modo oscuro
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  // Colores que se adaptan al tema (oscuro o claro)
  const backgroundColor = isDark ? '#1E1E1E' : '#FFFFFF';
  const subtitleColor = isDark ? '#CCCCCC' : '#333333';

  return (
    <View style={{ flex: 1, backgroundColor, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      {/* Logo de la aplicación */}
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        <GalaxyLogo width={150} height={40} />
      </View>

      {/* Ícono de verificación */}
      <Ionicons name="checkmark-circle" size={48} color="#FF2D9B" style={{ marginBottom: 24 }} />

      {/* Título principal */}
      <Text style={{ color: '#FF2D9B', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
        Verificación completada
      </Text>

      {/* Texto descriptivo */}
      <Text style={{ color: subtitleColor, fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
        Su email ha sido verificado con éxito, ahora ya puede acceder a Galaxy Pay usando su dirección de email y contraseña.
      </Text>

      {/* Espaciador para empujar el botón hacia abajo */}
      <View style={{ flex: 1 }} />

      {/* Botón de inicio de sesión */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FF2D9B',
          paddingVertical: 14,
          paddingHorizontal: 40,
          borderRadius: 12,
          width: '100%',
          alignItems: 'center',
          marginTop: 32,
        }}
        onPress={() => {
          // Aquí puedes navegar a la pantalla de login
          console.log('Iniciar sesión presionado');
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
