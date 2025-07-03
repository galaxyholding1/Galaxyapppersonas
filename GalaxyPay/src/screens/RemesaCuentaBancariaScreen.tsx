// Se importan componentes básicos de React Native y algunos adicionales
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

// Pantalla principal para ingresar los datos del destinatario y enviar una remesa bancaria
export default function RemesaCuentaBancariaScreen() {
  // Se definen los estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [pais, setPais] = useState('');
  const [moneda, setMoneda] = useState('');
  const [documento, setDocumento] = useState('');
  const [iban, setIban] = useState('');
  const [bic, setBic] = useState('');
  const [monto, setMonto] = useState('');
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal de autenticación

  // Función que se ejecuta al presionar "confirmar y enviar"
  const handleEnviar = () => {
    setShowModal(true); // Muestra el modal de autenticación
    setTimeout(() => {
      setShowModal(false);// Oculta el modal después de 3 segundos
      // Aquí se puede agregar navegación a la siguiente pantalla o lógica extra
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>¿A Quién Quieres Enviar Dinero?</Text>

        {/* Campo para ingresar nombre */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#aaa"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Campo para ingresar apellidos */}
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="#aaa"
          value={apellidos}
          onChangeText={setApellidos}
        />

        {/* Selector de país */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={pais}
            onValueChange={(itemValue) => setPais(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona un país" value="" />
            <Picker.Item label="Colombia" value="co" />
            <Picker.Item label="Perú" value="pe" />
            <Picker.Item label="México" value="mx" />
            <Picker.Item label="España" value="es" />
          </Picker>
        </View>

        {/* Selector de moneda */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={moneda}
            onValueChange={(itemValue) => setMoneda(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecciona una moneda" value="" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="COP" value="cop" />
            <Picker.Item label="EUR" value="eur" />
            <Picker.Item label="VEF" value="vef" />
          </Picker>
        </View>

        {/* Campo para documento de identidad */}
        <TextInput
          style={styles.input}
          placeholder="Documento de identidad"
          placeholderTextColor="#aaa"
          value={documento}
          onChangeText={setDocumento}
        />

        {/* Campo para número de cuenta IBAN */}
        <TextInput
          style={styles.input}
          placeholder="Número de cuenta IBAN"
          placeholderTextColor="#aaa"
          value={iban}
          onChangeText={setIban}
        />

        {/* Campo para código BIC/SWIFT */}
        <TextInput
          style={styles.input}
          placeholder="Código BIC/SWIFT"
          placeholderTextColor="#aaa"
          value={bic}
          onChangeText={setBic}
        />

        {/* Campo para ingresar el monto */}
        <TextInput
          style={styles.input}
          placeholder="Monto a enviar"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={monto}
          onChangeText={setMonto}
        />
      </ScrollView>

      {/* Botón para confirmar el envío */}
      <TouchableOpacity style={styles.enviarButton} onPress={handleEnviar}>
        <Text style={styles.enviarText}>confirmar y enviar</Text>
      </TouchableOpacity>

      {/* Modal de autenticación simulado */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="finger-print-outline" size={64} color="#fff" />
            <Text style={styles.modalText}>Autenticando...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos para la pantalla y componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 12,
  },
  picker: {
    color: '#fff',
  },
  enviarButton: {
    backgroundColor: '#e7458f',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    margin: 16,
  },
  enviarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
  },
});
