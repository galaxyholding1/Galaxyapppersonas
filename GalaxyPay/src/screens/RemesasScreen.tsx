// screens/RemesasScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RemesasScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const [addToFavorites, setAddToFavorites] = useState(false);

  const users = [
    { name: 'Jesús Murazo Pérez', email: 'jesus@dominio.com', flag: '🇵🇪', note: 'Tienda “San Juan Cali”', verified: true },
    { name: 'Alicia Honrafón Bautista', email: 'alicia@dominio.com', flag: '🇨🇴', note: 'Remesas', verified: true },
    { name: 'Julián Almagro Sánchez', email: 'julian@dominio.com', flag: '🇻🇪', note: 'Primo de Madrid', verified: true },
    { name: 'Alfonso Grats Fornos', email: 'alfonso@dominio.com', flag: '🇲🇽', note: 'Supermercado C.C.', verified: false },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>¿A Quién Quieres Enviar Dinero?</Text>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Buscar por nombre, email, número..."
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Contactos habituales</Text>
        <TouchableOpacity><Text style={styles.verTodos}>ver todos</Text></TouchableOpacity>
      </View>

      {users.map((user, index) => (
        <View key={index} style={styles.userRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.note}</Text>
          </View>
          <Text style={styles.flag}>{user.flag}</Text>
          <Icon name={user.verified ? 'cloud-done-outline' : 'cloud-outline'} size={20} color="#fff" style={{ marginRight: 8 }} />
          <CheckBox
            value={selected === user.name}
            onValueChange={() => setSelected(user.name)}
          />
        </View>
      ))}

      <View style={styles.checkboxRow}>
        <CheckBox
          value={addToFavorites}
          onValueChange={setAddToFavorites}
        />
        <Text style={styles.checkboxLabel}>
          ¿Quieres añadir los usuarios seleccionados en tus contactos habituales?
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  verTodos: {
    color: '#e7458f',
    fontSize: 12,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: '#555',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userEmail: {
    color: '#aaa',
    fontSize: 12,
  },
  flag: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 8,
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
