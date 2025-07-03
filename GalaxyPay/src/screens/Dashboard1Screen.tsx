import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg-uri'; // o usar react-native-svg para SVG locales
import welcomeBg from '../assets/welcome_bg.svg';

export default function Dashboard1Screen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subtitle}>Buenos días</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <View style={styles.notificationIcon}>
              <Icon name="notifications-outline" size={24} color="#fff" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

<<<<<<< HEAD
      {/* Accesos rápidos (Remesas, etc.) */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('RemesaSeleccion')}
        >
          <Icon name="send" size={24} color="#fff" />
          <Text style={styles.actionText}>Remesas</Text>
        </TouchableOpacity>
=======
        {/* contenido del panel superior */}
        <View style={styles.content}>
          <Text style={styles.contentText}>Contenido del Dashboard</Text>
        </View>
      </ScrollView>
>>>>>>> 10d277b8251024ce3edeccba532f29c503c3f830

        {/* Puedes agregar otros botones similares aquí */}
      </View>
    </ScrollView>
  );
}

// Estilos de la visual
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  notificationIcon: {
    position: 'relative',
    marginRight: 12,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#e7458f',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  quickActions: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#e7458f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});



