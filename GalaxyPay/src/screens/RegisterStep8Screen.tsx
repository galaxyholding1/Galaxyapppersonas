import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GalaxyLogo from './assets/galaxy_logo1.svg'; // Se importa el logotipo de Galaxy Pay en formato SVG

export default function RegisterStep8Screen() {
  // Se obtiene el tema actual del sistema (oscuro o claro)
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  // Se definen los colores dependiendo del tema
  const backgroundColor = isDark ? '#1E1E1E' : '#FFFFFF';
  const textColor = isDark ? '#FFFFFF' : '#000000';
  const subtitleColor = isDark ? '#CCCCCC' : '#333333';

  return (
    <View style={{ flex: 1, backgroundColor, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      {/* Sección del logotipo */}
      <View style={{ marginBottom: 40, alignItems: 'center' }}>
        <GalaxyLogo width={150} height={40} />
      </View>

      {/* Ícono de verificación */}
      <Ionicons name="checkmark-circle" size={48} color="#FF2D9B" style={{ marginBottom: 24 }} />

      {/* Título principal en color rosado */}
      <Text style={{ color: '#FF2D9B', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
        Hemos enviado un correo al email anteriormente indicado
      </Text>

      {/* Texto descriptivo con instrucciones de verificación */}
      <Text style={{ color: subtitleColor, fontSize: 14, textAlign: 'center', marginBottom: 8 }}>
        Para continuar debes verificar tu cuenta de email, para ello hemos enviado un email a la dirección anteriormente indicada por usted.
      </Text>

      <Text style={{ color: subtitleColor, fontSize: 14, textAlign: 'center' }}>
        Haz clic en el enlace que te hemos enviado a nombre@gmail.com para confirmar tu dirección de email. Si no la ves, revisa tu carpeta de spam.
      </Text>
    </View>
  );
}
