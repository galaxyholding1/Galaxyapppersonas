import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';

export default function RemesaRevisionScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    // Simula apertura del Face ID / espera
    setModalVisible(true);

    // Aquí podrías hacer una espera simulada o navegación tras validación
    setTimeout(() => {
      setModalVisible(false);
      // Aquí iría la navegación real después del "escaneo"
      // navigation.navigate('ConfirmacionFinal');
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Revisión y confirmación</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Alicia Moratón Bautista</Text>
            <Text style={styles.country}>Colombia 🇨🇴</Text>
            <Text style={styles.amount}>Monto: 100,00 COP</Text>
            <Text style={styles.detail}>Moneda: COP</Text>
            <Text style={styles.detail}>Tasa: 1 USD = 979 ARS</Text>
            <Text style={styles.detail}>Tiempo estimado: 3 días</Text>
            <Text style={styles.date}>16 de mayo 2025</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JA</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>Julián Almagro Sánchez</Text>
            <Text style={styles.country}>Venezuela 🇻🇪</Text>
            <Text style={styles.amount}>Monto: 80,00 VEF</Text>
            <Text style={styles.detail}>Moneda: VEF</Text>
            <Text style={styles.detail}>Tasa: 1 USD = 979 ARS</Text>
            <Text style={styles.detail}>Tiempo estimado: 5 seg</Text>
            <Text style={styles.date}>16 de mayo 2025</Text>
          </View>
        </View>
      </View>

      <Text style={styles.warning}>
        ⚠️ Revisa los datos antes de confirmar la remesa
      </Text>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>confirmar remesa</Text>
      </TouchableOpacity>

      {/* Modal de espera o Face ID */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../assets/face_id.png')} // Usa aquí el ícono que quieras
              style={{ width: 80, height: 80, tintColor: '#fff' }}
              resizeMode="contain"
            />
            <Text style={styles.modalText}>Validando identidad...</Text>
          </View>
        </View>
      </Modal>
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
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
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
  country: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 4,
  },
  amount: {
    color: '#e7458f',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    color: '#ccc',
    fontSize: 13,
  },
  date: {
    color: '#888',
    fontSize: 12,
    marginTop: 8,
  },
  warning: {
    color: '#ffcc00',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Modal
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
});
