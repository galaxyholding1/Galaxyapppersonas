// Pantalla de revisión y confirmación de datos de remesa.
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente principal de la pantalla
export default function RemesaRevisionScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Revisión y confirmación</Text>

      {/* Tarjeta con datos del destinatario y detalles de la transacción */}
      <View style={styles.card}>
        {/* Encabezado: avatar, nombre, relación y bandera del país */}
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JA</Text>
          </View>
          {/* Información del destinatario */}
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Julián Almagro Sánchez</Text>
            <Text style={styles.relation}>Primo de Madrid</Text>
          </View>
          {/* Bandera del país de destino */}
          <Text style={styles.flag}>🇻🇪</Text>
        </View>

        {/* Detalles de la remesa */}
        <View style={styles.details}>
          <Text style={styles.label}>
            País: <Text style={styles.value}>Venezuela</Text>
          </Text>
          <Text style={styles.label}>
            Moneda: <Text style={styles.value}>VEF</Text>
          </Text>
          <Text style={styles.label}>
            Cantidad: <Text style={styles.value}>1,000 × 370 ARS</Text>
          </Text>
          <Text style={styles.label}>
            Tasa actual: <Text style={styles.value}>1 USD = 14.5%</Text>
          </Text>
          <Text style={styles.label}>
            Tiempo estimado: <Text style={styles.value}>2 días</Text>
          </Text>
        </View>

        {/* Monto total y fecha */}
        <View style={styles.amountBox}>
          <Text style={styles.amount}>Monto: 80,00 VEF</Text>
          <Text style={styles.date}>16 de mayo 2025</Text>
        </View>
      </View>

      {/* Mensaje de advertencia al usuario */}
      <View style={styles.warning}>
        <Ionicons name="alert-circle-outline" size={18} color="#f0a" />
        <Text style={styles.warningText}>Revisa los datos antes de confirmar la remesa</Text>
      </View>

      {/* Botón para confirmar y enviar la remesa */}
      {/* TODO: Conectar este botón con la lógica de envío al backend o navegación a la siguiente pantalla */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>confirmar y enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16, // Espaciado general
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#7e57c2',
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
  flag: {
    fontSize: 22,
  },
  details: {
    marginTop: 10,
  },
  label: {
    color: '#bbb',
    fontSize: 13,
    marginBottom: 4,
  },
  value: {
    color: '#fff',
  },
  amountBox: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 12,
  },
  amount: {
    color: '#f69c26',
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
  warning: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  warningText: {
    color: '#f0a',
    marginLeft: 8,
    fontSize: 13,
  },
  confirmButton: {
    backgroundColor: '#e7458f',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
