import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RemesaConfirmacionExitosaScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Reporte</Text>

      {/* Confirmación */}
      <View style={styles.statusContainer}>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.successText}>enviada con éxito</Text>
      </View>

      {/* Tarjeta 1 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Alicia Moratón Bautista</Text>
            <Text style={styles.amount}>Monto: 100,00 COP</Text>
            <Text style={styles.date}>16 de mayo 2025</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsText}>+ detalles</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta 2 */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JA</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Julián Almagro Sánchez</Text>
            <Text style={styles.amount}>Monto: 80,00 VEF</Text>
            <Text style={styles.date}>16 de mayo 2025</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsText}>+ detalles</Text>
        </TouchableOpacity>
      </View>

      {/* Botón volver */}
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.returnText}>volver</Text>
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  successIcon: {
    fontSize: 36,
    color: '#e7458f',
  },
  successText: {
    color: '#e7458f',
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#e7458f',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  amount: {
    color: '#e7458f',
    fontSize: 16,
    marginVertical: 4,
  },
  date: {
    color: '#aaa',
    fontSize: 13,
  },
  detailsButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  detailsText: {
    color: '#ccc',
    fontSize: 13,
    fontStyle: 'italic',
  },
  returnButton: {
    backgroundColor: '#e7458f',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  returnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
