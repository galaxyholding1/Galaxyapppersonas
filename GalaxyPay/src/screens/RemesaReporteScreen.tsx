import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function RemesaReporteScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reporte</Text>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Alicia Moratón Bautista</Text>
            <Text style={styles.relation}>Remesa</Text>
          </View>
          <Text style={styles.amount}>Monto: 100,00 COP</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Movimiento de Transacción de Pago - Galaxy Pay</Text>
          <Text style={styles.sectionText}>Fecha: 16 de mayo 2025</Text>
          <Text style={styles.sectionText}>Hora de envío: 17:00 aproximadamente</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nombre: Alicia Moratón Bautista</Text>
          <Text style={styles.sectionText}>Correo: alicia@dominio.com</Text>
          <Text style={styles.sectionText}>País destino: Colombia</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción:</Text>
          <Text style={styles.sectionText}>
            Transferencia automática de Galaxy Pay desde cuenta Galaxy Pay a cuenta bancaria.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Código de rastreo:</Text>
          <Text style={styles.sectionText}>PLT45-2025-GB19-UP</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Este reporte ha sido generado automáticamente. Si tienes alguna duda sobre esta transacción,
            por favor comunícate con el soporte al cliente.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>volver</Text>
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
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: '#e7458f',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  relation: {
    color: '#aaa',
    fontSize: 12,
  },
  amount: {
    color: '#f69c26',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginVertical: 12,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  sectionText: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 2,
  },
  backButton: {
    backgroundColor: '#e7458f',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
