import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

// Pantalla inicial con bienvenida y botones para navegar a login o registro
const WelcomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  
  const handleKYC = () => {
    navigation.navigate(''); // TODO: Agregar ruta.
  };

 return (
    <ImageBackground
      source={require('../assets/welcome_bg.svg')} // Fondo gráfico
      style={styles.container}
      resizeMode="cover"
    >
      {/* Texto de bienvenida */}
      <Text style={styles.title}>Bienvenid@s al futuro</Text>

      {/* Logo de la app */}
      <Image
        source={require('../assets/galaxy_logo.svg')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.brand}>galaxypay</Text>

      {/* Botones principales */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
          <Text style={styles.btnText}>crear cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>iniciar sesión</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleKYC} style={styles.kycButton}>
          <Text style={styles.btnText}>¿Eres empresa?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

{/* Estilos utilizados en la visual */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.1,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginTop: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  brand: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '300',
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
  },
  registerBtn: {
    backgroundColor: '#ec008c',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: '#ff6a00',
    padding: 15,
    borderRadius: 12,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  kycButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    marginTop: 5
  }
});

export default WelcomeScreen;
