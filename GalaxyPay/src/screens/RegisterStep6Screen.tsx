import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Pantalla del paso 6 del registro
const RegisterStep6Screen = () => {
  // Detecta si el sistema está en modo oscuro
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Estado para la opción seleccionada: 'no', 'yes' o null (sin selección)
  const [selectedOption, setSelectedOption] = useState<'no' | 'yes' | null>('no');

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#121212' : '#ffffff' }, // Fondo según tema
      ]}
    >
       {/* Logo SVG de la aplicación */}
      <SvgUri
        width="140"
        height="60"
        source={require('../assets/galaxy_logo1.svg')}
        style={{ alignSelf: 'center', marginBottom: 20 }}
      />

      {/* Título principal */}
      <Text style={[styles.title, { color: isDarkMode ? '#ff9800' : '#8b4513' }]}>
        Crear contraseña
      </Text>

      {/* Pregunta clave sobre impuestos en EE.UU. */}
      <Text style={[styles.question, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
        ¿Estás sujeto/a a impuestos en los Estados Unidos?
      </Text>

      {/* Enlace informativo sobre la pregunta */}
      <Text
        style={{
          color: '#FF4081',
          textAlign: 'left',
          fontSize: 13,
          marginBottom: 16,
        }}
      >
        Descubre{' '}
        <Text style={{ color: isDarkMode ? '#aaa' : '#444' }}>
          por qué te pedimos esta información
        </Text>
      </Text>

      {/* Opción "No" con ícono de radio */}
      <Pressable
        style={styles.optionContainer}
        onPress={() => setSelectedOption('no')} // Al presionar, se selecciona "no"
      >
        <Icon
          name={selectedOption === 'no' ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={selectedOption === 'no' ? '#FF4081' : isDarkMode ? '#ccc' : '#555'}
        />
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          No
        </Text>
      </Pressable>

      {/* Opción "Sí" con ícono de radio */}
      <Pressable
        style={styles.optionContainer}
        onPress={() => setSelectedOption('yes')} // Al presionar, se selecciona "si"
      >
        <Icon
          name={selectedOption === 'yes' ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={selectedOption === 'yes' ? '#FF4081' : isDarkMode ? '#ccc' : '#555'}
        />
        <Text style={[styles.optionText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
          Sí, estoy sujeto/a a impuestos en EEUU.
        </Text>
      </Pressable>

      {/* Botón para continuar al siguiente paso */}
      <Pressable style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
      </Pressable>
    </View>
  );
};

export default RegisterStep6Screen;

{/* Estilos de la página */}
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
    marginBottom: 30,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 15,
  },
  continueButton: {
    backgroundColor: '#FF4081',
    padding: 14,
    borderRadius: 10,
    marginTop: 40,
  },
  continueText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
