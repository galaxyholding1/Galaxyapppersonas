import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri'; // Asegúrate de tener instalado este o usa react-native-svg

export default function SeleccionarAvatarScreen() {
  const avatars = [
    require('../assets/avatars/avatar1.svg'),
    require('../assets/avatars/avatar2.svg'),
    require('../assets/avatars/avatar3.svg'),
    require('../assets/avatars/avatar4.svg'),
    require('../assets/avatars/avatar5.svg'),
    require('../assets/avatars/avatar6.svg'),
    require('../assets/avatars/avatar7.svg'),
    require('../assets/avatars/avatar8.svg'),
    require('../assets/avatars/avatar9.svg'),
  ];

  const handleSelectAvatar = (avatar: string) => {
    // Lógica para seleccionar y guardar el avatar
    console.log('Avatar seleccionado:', avatar);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Añadir Avatar</Text>
      <Text style={styles.subtitle}>Selecciona tu avatar</Text>

      <ScrollView contentContainerStyle={styles.avatarGrid}>
        {avatars.map((avatar, index) => (
          <TouchableOpacity
            key={index}
            style={styles.avatarWrapper}
            onPress={() => handleSelectAvatar(avatar)}
          >
            <SvgUri width="80" height="80" source={avatar} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.skipText}>Ahora no</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 20,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  avatarWrapper: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    width: '30%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e7458f',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skipText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 10,
  },
});
