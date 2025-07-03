import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Llamado a sincronizar la camara del movil con el app para tomar selfie enmarcada
const SelfieCameraScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame} />
      <Text style={styles.instruction}>Coloque la cara en el marco.</Text>

      <View style={styles.controls}>
        <TouchableOpacity><Text style={styles.cancel}>Cancelar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.capture} />
        <TouchableOpacity><Text style={styles.rotate}>🔄</Text></TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos de la vista
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  frame: { width: 200, height: 200, borderRadius: 100, borderWidth: 2, borderColor: '#fff', marginBottom: 20 },
  instruction: { color: '#fff', marginBottom: 20 },
  controls: { flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center' },
  cancel: { color: '#fff' },
  capture: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#fff' },
  rotate: { fontSize: 24, color: '#f54690' },
});

export default SelfieCameraScreen;
