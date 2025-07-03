import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri'; // Para imágenes SVG
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={styles.tab}>General</Text>
      </View>

      {/* Avatar */}
      <TouchableOpacity onPress={() => setShowMenu(true)} style={styles.avatarContainer}>
        <SvgUri source={require('../assets/avatar.svg')} width={100} height={100} />
        <Text style={styles.subtitle}>Mi foto de perfil</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => setShowMenu(true)}>
            <Text style={styles.change}>Cambiar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.delete}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Menú desplegable */}
      <Modal visible={showMenu} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Ionicons name="person" size={18} color="#fff" />
              <Text style={styles.menuTitle}>Cambiar</Text>
              <TouchableOpacity onPress={() => setShowMenu(false)} style={styles.closeIcon}>
                <Ionicons name="close" size={18} color="#fff" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>➤ Añadir avatar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>➤ Tomar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>➤ Seleccionar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>➤ Crear con la IA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tab: {
    color: '#f0813a',
    fontSize: 14,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 20,
  },
  change: {
    color: '#f0813a',
    fontWeight: 'bold',
  },
  delete: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: 250,
    backgroundColor: 'linear-gradient(180deg, #FF6B6B, #C44BC6)',
    borderRadius: 12,
    padding: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuTitle: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  closeIcon: {
    padding: 5,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
  },
});
