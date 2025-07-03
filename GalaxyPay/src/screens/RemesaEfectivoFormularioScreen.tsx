import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RemesaEfectivoFormularioScreen() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [pais, setPais] = useState('');
  const [moneda, setMoneda] = useState('');
  const [documento, setDocumento] = useState('');
  const [puntoRecogida, setPuntoRecogida] = useState('');
  const [telefono, setTelefono] = useState('');
  const [origenDinero, setOrigenDinero] = useState('');

  const [showBiometria, setShowBiometria] = useState(false);

  const handleConfirmar = () => {
    // Simula escaneo facial
    setShowBiometria(true);
    setTimeout(() => {
      setShowBiometria(false);
      // Aquí puedes redirigir a la siguiente pantalla
      // navigation.navigate('RemesaEfectivoRevisionScreen');
    }, 3000); // 3 segundos de espera
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Retira Dinero En Efectivo</Text>

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
            <Picker.Item label="País" value="" />
            <Picker.Item label="Colombia" value="colombia" />
            <Picker.Item label="México" value="mexico" />
            <Picker.Item label="Venezuela" value="venezuela" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={moneda}
            onValueChange={setMoneda}
            style={styles.picker}
          >
            <Picker.Item label="Moneda" value="" />
            <Picker.Item label="COP" value="cop" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="VES" value="ves" />
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
          placeholder="Punto de recogida"
          placeholderTextColor="#aaa"
          value={puntoRecogida}
          onChangeText={setPuntoRecogida}
        />

        <Text style={styles.helpText}>
          Introduce el nombre de teléfono donde se te enviará el código que has de enseñar junto a tu documento de identidad en el punto de recogida.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#aaa"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={origenDinero}
            onValueChange={setOrigenDinero}
            style={styles.picker}
          >
            <Picker.Item label="Origen del dinero" value="" />
            <Picker.Item label="Salario" value="salario" />
            <Picker.Item label="Ahorros" value="ahorros" />
            <Picker.Item label="Transferencia" value="transferencia" />
          </Picker>
        </View>

        <Text style={styles.alertText}>⚠️ Revisa los datos antes de confirmar la remesa</Text>

        <TouchableOpacity style={styles.continueButton} onPress={handleConfirmar}>
          <Text style={styles.continueText}>confirmar y enviar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Biometría */}
      <Modal visible={showBiometria} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.faceContainer}>
            <Image
              source={require('../assets/face_scan.png')} // Asegúrate de tener esta imagen
              style={styles.faceImage}
            />
          </View>
        </View>
      </Modal>
    </>
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
  input: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  pickerContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    color: '#fff',
  },
  helpText: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 12,
  },
  alertText: {
    color: '#e7458f',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 12,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  faceImage: {
    width: 80,
    height: 80,
    tintColor: '#fff',
  },
});

