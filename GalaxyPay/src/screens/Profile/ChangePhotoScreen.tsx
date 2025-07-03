import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Llammado a subir una foto existente en el movil
const ChangePhotoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi foto de perfil</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <View style={styles.actions}>
        <TouchableOpacity><Text style={styles.link}>Cambiar</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>Eliminar</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.buttonTextSm}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos de la visual
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1e', alignItems: 'center', paddingTop: 50 },
  title: { fontSize: 18, color: '#fff', marginBottom: 10 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  actions: { flexDirection: 'row', justifyContent: 'space-around', width: '80%' },
  link: { color: '#f08139', fontSize: 16 },
  notNowText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  saveButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20, 
    gap: 10,
    backgroundColor: '#626262'
  },
  buttonTextSm: {
    color: '#fff',
    fontSize: 14,
  }
});

export default ChangePhotoScreen;
