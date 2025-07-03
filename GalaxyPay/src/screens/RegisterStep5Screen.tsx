// Importación de componentes y módulos necesarios desde React y React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import SvgUri from 'react-native-svg-uri'; // Para mostrar un archivo SVG
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Iconos vectoriales

// Componente principal para el paso 5 del registro
const RegisterStep5Screen = () => {
  const colorScheme = useColorScheme(); // Detecta si el sistema está en modo oscuro o claro
  const isDarkMode = colorScheme === 'dark'; // Booleano que indica si el tema es oscuro

  // Estados del componente: contraseña ingresada y visibilidad de la contraseña
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Función para determinar la fuerza de la contraseña
  const getPasswordStrength = () => {
    if (password.length > 10) return 'Fuerte';
    if (password.length > 5) return 'Media';
    return 'Débil';
  };

  // Función para obtener el color asociado a la fuerza de la contraseña
  const getPasswordStrengthColor = () => {
    if (password.length > 10) return '#FF4081'; // Rosa fuerte para fuerte
    if (password.length > 5) return '#FFC107'; // Amarillo para media
    return '#F44336'; // Rojo para débil
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#ffffff' },
      ]}
    >

       {/* Logo SVG centrado */}
      <SvgUri
        width="140"
        height="60"
        source={require('../assets/galaxy_logo1.svg')}
        style={{ alignSelf: 'center', marginBottom: 20 }}
      />

      {/* Título */}
      <Text style={[styles.title, { color: isDarkMode ? '#ff9800' : '#8b4513' }]}>
        Crear contraseña
      </Text>

      {/* Contenedor del input de contraseña */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDarkMode ? '#2c2c2c' : '#f0f0f0',
              color: isDarkMode ? '#ffffff' : '#000000',
            },
          ]}
          secureTextEntry={!showPassword}
          placeholder="Contraseña"
          placeholderTextColor={isDarkMode ? '#aaaaaa' : '#666666'}
          value={password}
          onChangeText={setPassword}
        />

        {/* Botón para mostrar/ocultar la contraseña */}
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={isDarkMode ? '#ffffff' : '#000000'}
          />
        </Pressable>
      </View>

      {/* Texto que indica la seguridad de la contraseña */}
      <Text style={{ color: isDarkMode ? '#ffffff' : '#000000', marginBottom: 8 }}>
        Seguridad: <Text style={{ fontWeight: 'bold' }}>{getPasswordStrength()}</Text>
      </Text>

      {/* Barra de progreso que indica fuerza de la contraseña */}
      <View style={styles.strengthBarBackground}>
        <View
          style={[
            styles.strengthBarFill,
            {
              backgroundColor: getPasswordStrengthColor(),
              width: `${Math.min(password.length * 10, 100)}%`,
            },
          ]}
        />
      </View>

      {/* Texto adicional si la contraseña es fuerte */}
      {password.length > 10 && (
        <Text style={[styles.hintText, { color: '#FF4081' }]}>¡Esta es la buena!</Text>
      )}

      {/* Sección para código promocional o de invitación */}
      <View style={{ marginTop: 40 }}>
        <Text style={[styles.codeLabel, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          ¿Tienes un código?
        </Text>
        <Text
          style={{
            color: isDarkMode ? '#aaaaaa' : '#444444',
            textAlign: 'center',
            fontSize: 12,
            marginVertical: 6,
          }}
        >
          Si dispones de un “Código promocional” de Galaxy Pay o un “código de invitación”
        </Text>
        <Text style={{ color: '#FF4081', textAlign: 'center', textDecorationLine: 'underline' }}>
          Utilízalo aquí
        </Text>
      </View>

      {/* Botón para continuar con el proceso */}
      <Pressable style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
      </Pressable>
    </View>
  );
};

export default RegisterStep5Screen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  strengthBarBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#66666650',
    borderRadius: 5,
    marginBottom: 8,
  },
  strengthBarFill: {
    height: 6,
    borderRadius: 5,
  },
  hintText: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 20,
  },
  codeLabel: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#FF4081',
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  continueText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
