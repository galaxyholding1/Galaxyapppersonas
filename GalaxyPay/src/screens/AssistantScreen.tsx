import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AssistantScreen = () => {
  const navigation = useNavigation();

  const handleStartChat = () => {
    navigation.navigate('AssistantChat'); // Asegúrate de tener esta ruta configurada en tu navigator
  };
// Inicio de la interaccion con el usuario
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subGreeting}>Buenos días</Text>
        </View>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../assets/menu.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
// Logo presente en la pantalla
      <View style={styles.card}>
        <Image source={require('../assets/logo-galaxy.png')} style={styles.logo} />
        <Text style={styles.title}>Bienvenid@</Text>
        <Text style={styles.subtitle}>
          Soy tu asistente virtual Galaxy{'\n'}te acompañaré a resolver tus dudas,{'\n'}
          indícame en qué te puedo asistir.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleStartChat}>
          <Text style={styles.buttonText}>Iniciar asistencia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssistantScreen;
// Estilos relacionados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subGreeting: {
    color: '#bbb',
    fontSize: 12,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  icon: {
    width: 24,
    height: 24,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffa94d',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#e54690',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
