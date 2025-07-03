import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Linking
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function VerificationCodeScreen() {

  // Estado local para almacenar los 6 dígitos del código
  const [code, setCode] = useState(Array(6).fill(''));

  // Referencias a los inputs para poder controlar el enfoque (focus)
  const inputs = useRef<TextInput[]>([]);

  // Hook para navegación entre pantallas
  const navigation = useNavigation();

  // Maneja el cambio de texto en cada campo del código
  const handleChange = (text: string, index: number) => {
    if (/^[0-9]$/.test(text)) {
      // Si el texto es un número de un solo dígito, lo asigna al índice correspondiente
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // Mueve el enfoque al siguiente campo si no es el último
      if (index < 5) {
        inputs.current[index + 1].focus();
      }
    } else if (text === '') {
      // Permite borrar el contenido del campo
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
    }
  };

  // Al presionar el botón Aceptar
  const handleSubmit = () => {
    const fullCode = code.join('');

    // Valida que se hayan ingresado los 6 dígitos
    if (fullCode.length < 6) {

      // Aquí se colocaría la validación con el backend
      Alert.alert('Código incompleto', 'Por favor ingresa los 6 dígitos del código.');
      return;
    }

    // Aquí iría la validación real con backend
    Alert.alert('Código recibido', 'Tu código es: ${fullCode}');
  };

  return (
    <View style={styles.container}>
      {/* Botón para volver a la pantalla anterior */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Logo de la aplicación */}
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título de la pantalla */}
      <Text style={styles.title}>Escribe el código</Text>

      {/* Descripción informativa */}
      <Text style={styles.description}>
        Si no has recibido el código de recuperación de la contraseña vuelve a solicitarlo.
      </Text>

      {/* Texto adicional con enlace de soporte */}
      <Text style={styles.secondaryText}>
        Si estás experimentando problemas recuperando la contraseña, contáctanos{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:soporte@galaxypay.com')}>
          aquí
        </Text>.
      </Text>

      {/* Contenedor de campos individuales del código */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref!)} // Asigna referencia para controlar el enfoque
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            textAlign="center"
          />
        ))}
      </View>
      {/* Botón de acción */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos de la pantalla
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
    marginBottom: 10,
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
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 45,
    height: 55,
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    fontSize: 24,
    color: '#fff',
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
