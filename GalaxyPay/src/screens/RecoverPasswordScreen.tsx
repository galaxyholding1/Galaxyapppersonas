import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RecoverPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  
// Llamado a datos del usuario para la recuperacion de la contraseña
  const handleRecover = () => {
    if (!email.trim()) {
      Alert.alert('Campo vacío', 'Por favor ingresa tu correo electrónico.');
      return;
    }

    // Simulación de lógica de recuperación y alerta de envio de correo
    Alert.alert(
      'Correo enviado',
      'Hemos enviado un enlace a tu correo para restablecer tu contraseña.'
    );
  };

  // Estructura textos y logo
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Image
        source={require('../assets/logo.png')} // Cambia la ruta si el logo está en otra carpeta
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Recuperación de contraseña</Text>

      <Text style={styles.description}>
        Introduce tu email para recuperar tu contraseña. Recibirás un correo con instrucciones.
      </Text>

      <Text style={styles.secondaryText}>
        Si estás experimentando problemas recuperando la contraseña, contáctanos{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('mailto:soporte@galaxypay.com')}>
          aquí
        </Text>.
      </Text>

      <TextInput
        placeholder="e-mail"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRecover}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos de la visual
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 160,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#e54690',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 15,
  },
  secondaryText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  link: {
    color: '#f08139',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#2c2c2e',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#e54690',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
