import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RemesaDatosScreen() {
  const [amount, setAmount] = useState('');
  const [pais, setPais] = useState('');
  const [moneda, setMoneda] = useState('');
  const [tipo, setTipo] = useState('');
  const [origen, setOrigen] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Datos de la remesa</Text>

      <View style={styles.card}>
        {/* Info receptor */}
        <View style={styles.receiverInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          <View style={styles.receiverText}>
            <Text style={styles.receiverName}>Alicia Moratón Bautista</Text>
            <Text style={styles.receiverCountry}>Nicaragua 🇳🇮</Text>
          </View>
        </View>

        {/* Campos */}
        <TextInput
          style={styles.input}
          placeholder="Monto a enviar"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* País */}
        <View style={styles.pickerContainer}>
          <Picker selectedValue={pais} onValueChange={setPais} style={styles.picker}>
            <Picker.Item label="País" value="" />
            <Picker.Item label="Colombia" value="colombia" />
            <Picker.Item label="México" value="mexico" />
            <Picker.Item label="Perú" value="peru" />
          </Picker>
        </View>

        {/* Moneda */}
        <View style={styles.pickerContainer}>
          <Picker selectedValue={moneda} onValueChange={setMoneda} style={styles.picker}>
            <Picker.Item label="Moneda" value="" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="COP" value="cop" />
            <Picker.Item label="MXN" value="mxn" />
            <Picker.Item label="VEF" value="vef" />
            <Picker.Item label="ARS" value="ars" />
          </Picker>
        </View>

        {/* Tipo de remesa */}
        <View style={styles.pickerContainer}>
          <Picker selectedValue={tipo} onValueChange={setTipo} style={styles.picker}>
            <Picker.Item label="Tipo de remesa" value="" />
            <Picker.Item label="Cuenta bancaria" value="cuenta" />
            <Picker.Item label="Retiro en efectivo" value="efectivo" />
            <Picker.Item label="Usuario Galaxy Pay" value="galaxy" />
          </Picker>
        </View>

        {/* Submenú tipo de remesa */}
        {tipo !== '' && (
          <View style={styles.submenu}>
            {tipo === 'cuenta' && <Text style={styles.submenuText}>Cuenta bancaria</Text>}
            {tipo === 'efectivo' && <Text style={styles.submenuText}>Retirada de efectivo</Text>}
            {tipo === 'galaxy' && <Text style={styles.submenuText}>Usuario Galaxy Pay</Text>}
          </View>
        )}

        {/* Origen del dinero */}
        <View style={styles.pickerContainer}>
          <Picker selectedValue={origen} onValueChange={setOrigen} style={styles.picker}>
            <Picker.Item label="Origen del dinero" value="" />
            <Picker.Item label="Apple Pay / Google Pay" value="apple_google" />
            <Picker.Item label="Cuenta de Galaxy Pay" value="galaxy_pay" />
            <Picker.Item label="Transferencia de banco" value="bank" />
          </Picker>
        </View>

        {/* Submenú origen del dinero */}
        {origen !== '' && (
          <View style={styles.submenu}>
            {origen === 'apple_google' && <Text style={styles.submenuText}>Apple Pay / Google Pay</Text>}
            {origen === 'galaxy_pay' && <Text style={styles.submenuText}>Cuenta de Galaxy Pay</Text>}
            {origen === 'bank' && <Text style={styles.submenuText}>Transferencia bancaria</Text>}
          </View>
        )}

        {/* Resumen */}
        <View style={styles.transactionSummary}>
          <Text style={styles.summaryText}>País: {pais || 'Colombia'}</Text>
          <Text style={styles.summaryText}>Moneda: {moneda || 'COP'}</Text>
          <Text style={styles.summaryText}>Tarifa: 4.000 {moneda || 'COP'}</Text>
          <Text style={styles.summaryText}>Tasa: 1 USD = 4.170 {moneda || 'COP'}</Text>
          <Text style={styles.summaryText}>Tiempo estimado: 3 días</Text>
        </View>
      </View>

      {/* Continuar */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
  },
  receiverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: '#e7458f',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  receiverText: {
    flex: 1,
  },
  receiverName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  receiverCountry: {
    color: '#aaa',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
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
  submenu: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  submenuText: {
    color: '#e7458f',
    fontWeight: 'bold',
  },
  transactionSummary: {
    marginTop: 16,
  },
  summaryText: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 4,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
