import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SvgUri from 'react-native-svg-uri'; // O usa 'react-native-svg' si los importas como componente
import { Ionicons } from '@expo/vector-icons';

export default function AvatarFinalScreen() {
  const avatarUri = require('../assets/avatars/avatar-aplicado.svg'); // Asegúrate de que esta ruta exista

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="person-circle-outline" size={22} color="#fff" />
          <Text style={styles.title}>Mi Perfil</Text>
        </View>
        <Text style={styles.generalText}>General</Text>
      </View>

      {/* Avatar aplicado */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <SvgUri width={100} height={100} source={avatarUri} />
          <View style={styles.tag}>
            <Text style={styles.tagText}>🌟</Text>
          </View>
        </View>
        <Text style={styles.avatarLabel}>Mi avatar</Text>

        <View style={styles.actionsRow}>
          <TouchableOpacity>
            <Text style={styles.changeText}>Cambiar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.deleteText}>Eliminar</Text>
          </TouchableOpacity>
        </View>

        {/* Botón para guardar */}
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="cloud-upload-outline" size={18} color="#fff" />
          <Text style={styles.saveButtonText}>guardar</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  generalText: {
    color: '#F0813A',
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatarWrapper: {
    position: 'relative',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 4,
    backgroundColor: '#fff',
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    backgroundColor: '#e7458f',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  tagText: {
    color: '#fff',
    fontSize: 10,
  },
  avatarLabel: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 20,
  },
  changeText: {
    color: '#F0813A',
    fontWeight: 'bold',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    backgroundColor: '#e7458f',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
