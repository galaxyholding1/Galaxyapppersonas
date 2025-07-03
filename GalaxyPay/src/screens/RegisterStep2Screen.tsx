// Importaciones necesarias de React, componentes de UI y librerías externas
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/galaxy_logo1.svg';


// Pantalla de registro paso 2: recoge datos personales
const RegisterStep2Screen = ({ navigation }) => {

  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Mostrar/ocultar selector de fecha
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  // Al confirmar fecha, se guarda y se cierra el picker
  const handleConfirm = (date) => {
    setBirthDate(date);
    hideDatePicker();
  };

  // Navega al siguiente paso si todos los campos están completos
  const handleContinue = () => {
    if (name && lastName && documentId && birthDate) {
      navigation.navigate('RegisterStep3');
    }
  };

  return (
    <View style={styles.container}>

      {/* Barra de progreso de 6 pasos, activo el primero */}
      <View style={styles.progressBar}>
        <View style={[styles.step, styles.activeStep]} />
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.step} />
        ))}
      </View>

      {/* Logo de la aplicación */}
      <Logo width={100} height={100} style={styles.logo} />
      <Text style={styles.title}>datos personales</Text>

      {/* Campo: Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      {/* Campo: Apellidos */}
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#ccc"
        value={lastName}
        onChangeText={setLastName}
      />

      {/* Campo: Documento de identidad */}
      <TextInput
        style={styles.input}
        placeholder="Documento de identidad"
        placeholderTextColor="#ccc"
        value={documentId}
        onChangeText={setDocumentId}
        keyboardType="numeric"
      />

      {/* Selector de fecha de nacimiento */}
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text style={{ color: birthDate ? '#fff' : '#ccc' }}>
          {birthDate
            ? new Date(birthDate).toLocaleDateString()
            : 'Fecha de nacimiento'}
        </Text>
        <Icon name="calendar" size={18} color="#ccc" style={styles.icon} />
      </TouchableOpacity>

      {/* Modal para selección de fecha */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
        locale="es_ES"
        headerTextIOS="Elige una fecha"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Confirmar"
        themeVariant="dark"
      />

      {/* Botón para continuar al siguiente paso */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#fff',
  },
  icon: {
    marginLeft: 'auto',
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

export default RegisterStep2Screen;
