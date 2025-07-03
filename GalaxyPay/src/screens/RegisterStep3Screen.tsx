// Pantalla del tercer paso del registro: información laboral
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Logo from '../assets/galaxy_logo1.svg'; // Logo SVG

type RootStackParamList = {
  RegisterStep3Screen: undefined;
  RegisterStep4Screen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterStep3Screen'>;

const RegisterStep3Screen: React.FC<Props> = ({ navigation }) => {
  const [direccion1, setDireccion1] = useState<string>('');
  const [direccion2, setDireccion2] = useState<string>('');
  const [codigoPostal, setCodigoPostal] = useState<string>('');
  const [localidad, setLocalidad] = useState<string>('');
  const [provincia, setProvincia] = useState<string>('');
  const [pais, setPais] = useState<string>('');

  // Función que navega al siguiente paso si todos los campos están llenos
  const handleContinue = () => {
    if (direccion1 && codigoPostal && localidad && provincia && pais) {
      navigation.navigate('RegisterStep4Screen');
    }
  };

  return (
    <View style={styles.container}>

      {/* Barra de progreso (paso 2 de 6) */}
      <View style={styles.progressBar}>
        <View style={[styles.step, styles.activeStep]} />
        <View style={[styles.step, styles.activeStep]} />
        {[...Array(4)].map((_, i) => (
          <View key={i} style={styles.step} />
        ))}
      </View>

      {/* Logo e instrucciones */}
      <Logo width={100} height={100} style={styles.logo} />
      <Text style={styles.title}>dirección postal completa</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="direccion 1"
        placeholderTextColor="#ccc"
        value={direccion1}
        onChangeText={setDireccion1}
      />
      <TextInput
        style={styles.input}
        placeholder="direccion 2"
        placeholderTextColor="#ccc"
        value={direccion2}
        onChangeText={setDireccion2}
      />
      <TextInput
        style={styles.input}
        placeholder="código postal"
        placeholderTextColor="#ccc"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="localidad"
        placeholderTextColor="#ccc"
        value={localidad}
        onChangeText={setLocalidad}
      />
      <TextInput
        style={styles.input}
        placeholder="provincia"
        placeholderTextColor="#ccc"
        value={provincia}
        onChangeText={setProvincia}
      />
      <TextInput
        style={styles.input}
        placeholder="país"
        placeholderTextColor="#ccc"
        value={pais}
        onChangeText={setPais}
      />

      {/* Botón para continuar */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStep3Screen;


// Estilos para la pantalla
const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#1d1d1d' },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  step: {
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
    flex: 1,
    marginHorizontal: 2,
  },
  activeStep: {
    backgroundColor: '#ec008c',
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#f96d00',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'lowercase',
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#ec008c',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
