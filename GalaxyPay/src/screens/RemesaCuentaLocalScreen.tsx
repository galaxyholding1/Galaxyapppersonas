import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RemesaCuentaLocalScreen() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [pais, setPais] = useState('');
  const [documento, setDocumento] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [monto, setMonto] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>¿A Quién Quieres Enviar Dinero?</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#aaa"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#aaa"
        value={apellidos}
        onChangeText={setApellidos}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={pais}
          onValueChange={setPais}
          style={styles.picker}
        >
          <Picker.Item label="selecciona un país" value="" />
          <Picker.Item label="Colombia" value="col" />
          <Picker.Item label="México" value="mex" />
          <Picker.Item label="Argentina" value="arg" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#aaa"
        value={documento}
        onChangeText={setDocumento}
      />

      <TextInput
        style={styles.input}
        placeholder="Número de cuenta"
        placeholderTextColor="#aaa"
        value={cuenta}
        onChangeText={setCuenta}
      />

      <TextInput
        style={styles.input}
        placeholder="Monto a enviar"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 8,
    color: '#fff',
    padding: 12,
    marginBottom: 12,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
