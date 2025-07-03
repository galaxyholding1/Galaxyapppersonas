import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Importación de componentes básicos

// Componente funcional que representa la pantalla de inicio
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a Galaxy Pay</Text>
    </View>
  );
};

// Estilos para la pantalla
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});

export default HomeScreen;
