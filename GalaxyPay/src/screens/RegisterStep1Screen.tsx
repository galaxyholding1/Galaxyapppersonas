// Importaciones necesarias
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { countries } from '../data/countries'; // Se importa una lista de países con banderas e indicativos
import Logo from '../assets/galaxy_logo1.svg';

// Primer paso del registro: selección de país, correo, aceptación de términos
const RegisterStep1Screen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null); // País seleccionado
  const [email, setEmail] = useState(''); // Correo electrónico del usuario
  const [phoneCode, setPhoneCode] = useState(''); // Indicativo del país
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Checkbox de aceptación
  const [modalVisible, setModalVisible] = useState(false); // Control del modal
  const [searchText, setSearchText] = useState(''); // Búsqueda dentro del modal

  // Filtro para países según texto buscado
  const filteredCountries = countries.filter((country) =>
    '${country.label} ${country.code}'
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  // Selección de país desde el modal
  const selectCountry = (country) => {
    setSelectedCountry(country);
    setPhoneCode(country.code);
    setModalVisible(false);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Logo width={100} height={100} style={styles.logo} />

      {/* Descripción e instrucciones */}
      <Text style={styles.description}>
        Te acompañamos en el proceso de registro de forma sencilla y rápida
      </Text>

      <Text style={styles.warning}>Indícanos tu país y correo electrónico</Text>

      {/* Selector de país que abre el modal */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: selectedCountry ? '#000' : '#888' }}>
          {selectedCountry ? selectedCountry.label : 'Selecciona un país'}
        </Text>
      </TouchableOpacity>

      {/* Modal para búsqueda y selección del país */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>

          {/* Barra de búsqueda */}
          <TextInput
            placeholder="buscar indicativo de país"
            placeholderTextColor="#ccc"
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />

          {/* Lista de países filtrados */}
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => selectCountry(item)}
              >
                <item.flag width={30} height={20} />
                <Text style={styles.countryLabel}>{item.label}</Text>
                <Text style={styles.countryCode}>{item.code}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      {/* Campo de correo */}
      <TextInput
        placeholder="e-mail"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de teléfono (solo visualiza código) */}
      <View style={styles.input}>
        <Text style={{ color: phoneCode ? '#000' : '#888' }}>
          {phoneCode || 'Teléfono'}
        </Text>
      </View>

      {/* Aceptación de términos */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={acceptedTerms} onValueChange={setAcceptedTerms} />
        <Text style={styles.checkboxLabel}>
          acepto términos legales y políticas de privacidad
        </Text>
      </View>

      {/* Botón para continuar al siguiente paso */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (acceptedTerms && selectedCountry && email && phoneCode) {
            navigation.navigate('Home');
          }
        }}
      >
        <Text style={styles.buttonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

{/* Estilos utilizados en la visual */}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, paddingTop: 50 },
  logo: { alignSelf: 'center', marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 8 },
  warning: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  input: {
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxLabel: { marginLeft: 8, fontSize: 12 },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ec008c',
  },
  buttonText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    paddingTop: 50,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  countryLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  countryCode: {
    fontSize: 16,
    color: '#aaa',
  },
});

export default RegisterStep1Screen;
R
