// Importación de módulos y componentes necesarios
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Linking,
} from 'react-native';
import Logo from '../assets/galaxy_logo1.svg'; // ← Importación del logo en formato SVG
// Pantalla principal de registro con opciones (correo, Google, Facebook)
const RegisterScreen = ({ navigation }) => {
  const colorScheme = useColorScheme(); // Detecta el modo claro/oscuro del sistema
  const isDark = colorScheme === 'dark';
  
// Definición del tema de colores dinámico según modo claro/oscuro
  const theme = {
    background: isDark ? '#121212' : '#ffffff',
    text: isDark ? '#ffffff' : '#000000',
    secondaryText: isDark ? '#cccccc' : '#333333',
    accent: '#ec008c',
    purple: '#6a1b9a',
    buttonText: '#ffffff',
  };

  // Funciones para abrir enlaces externos de Términos y Política de Privacidad
  const openTerms = () => {
    Linking.openURL('https://galaxypay.com/terminos');
  };

  const openPrivacy = () => {
    Linking.openURL('https://galaxypay.com/privacidad');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Logo de la aplicación */}
      <Logo width={120} height={120} style={styles.logo} />
      {/* Título de la pantalla */}
      <Text style={[styles.title, { color: theme.accent }]}>
        Regístrate en Galaxy Pay
      </Text>
      
      {/* Botón de registro por correo */}
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.purple }]}>
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>correo electrónico</Text>
      </TouchableOpacity>

      {/* Botones redes sociales */}
      <TouchableOpacity style={[styles.button, { backgroundColor: '#5e35b1' }]}>
        <Text style={styles.buttonText}>continuar con google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]}>
        <Text style={styles.buttonText}>continuar con facebook</Text>
      </TouchableOpacity>

      {/* Texto aceptacion de terminos y condiciones con enlaces */}
      <Text style={[styles.legalText, { color: theme.secondaryText }]}>
        Al continuar, confirmas que estás de acuerdo con los{' '}
        <Text onPress={openTerms} style={{ textDecorationLine: 'underline' }}>
          Términos de servicio
        </Text>{' '}
        de Galaxy Pay y has leído la{' '}
        <Text onPress={openPrivacy} style={{ textDecorationLine: 'underline' }}>
          Política de privacidad
        </Text>
        .
      </Text>

      {/* Enlace para usuarios existentes */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: theme.accent, marginTop: 20 }}>
          ¿Ya tienes una cuenta? <Text style={{ fontWeight: 'bold' }}>Iniciar sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

{/* Estilos usados en la visual */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  legalText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
