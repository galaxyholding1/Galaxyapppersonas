import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Iconos de Ionicons
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Navegación y drawer


export default function Dashboard2Screen() {
  const navigation = useNavigation(); // Hook para acceder a navegación

  // Navega a la pantalla del asistente/chatbot
  const handleChatbotPress = () => {
    navigation.navigate('Assistant');
  };

// Abre el menú lateral (drawer)
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>

        {/* Encabezado con botón de menú, avatar y notificaciones */}
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
          
          {/* Avatar del usuario */}
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatar} />
          <View style={styles.headerText}>

            {/* Texto de saludo */}
            <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
            <Text style={styles.subtext}>Buenos días</Text>
          </View>

          {/* Iconos de notificación y configuración */}
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.icon} />
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </View>
        </View>

        {/* Sección de saldos */}
        <View style={styles.balanceRow}>
          {/* Saldo total */}
          <View style={styles.balanceBox}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
          </View>

            {/* Total que debe */}
          <View style={styles.balanceBox}>
            <Text style={styles.balanceLabel}>Total Deber</Text>
            <Text style={[styles.balanceAmount, { color: '#F39C12' }]}>-$1,187.40</Text>
          </View>
        </View>

        {/* Mensaje promocional */}
        <Text style={styles.banner}>Envía dinero al instante. Donde quieras, como quieras.</Text>

        {/* Botones de acciones rápidas */}
        <View style={styles.actions}>
            {/* Botón para añadir dinero */}
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2ecc71' }]}>
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text style={styles.actionText}>Añadir</Text>
          </TouchableOpacity>

           {/* Botón para enviar dinero */}
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f39c12' }]}>
            <Ionicons name="paper-plane-outline" size={24} color="#fff" />
            <Text style={styles.actionText}>Enviar</Text>
          </TouchableOpacity>

            {/* Botón para recibir dinero */}
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#e74c3c' }]}>
            <Ionicons name="download-outline" size={24} color="#fff" />
            <Text style={styles.actionText}>Recibir</Text>
          </TouchableOpacity>
        </View>

        {/* Últimas remesas */}
        <Text style={styles.sectionTitle}>Últimas remesas</Text>
        <View style={styles.remesa}>
          <View style={styles.remesaInfo}>
            <Text style={styles.remesaName}>Jesús Munez Pérez</Text>
            <Text style={styles.remesaDesc}>“Tarea Juan Galo”</Text>
          </View>
          <Text style={styles.remesaAmount}>4,000.00</Text>
        </View>
        <View style={styles.remesa}>
          <View style={styles.remesaInfo}>
            <Text style={styles.remesaName}>Alicia Manchón Bautista</Text>
            <Text style={styles.remesaDesc}>Airbnb</Text>
          </View>
          <Text style={styles.remesaAmount}>900.00</Text>
        </View>
        <View style={styles.remesa}>
          <View style={styles.remesaInfo}>
            <Text style={styles.remesaName}>Julián Almagro Sánchez</Text>
            <Text style={styles.remesaDesc}>Venta de móvil</Text>
          </View>
          <Text style={styles.remesaAmount}>360.40</Text>
        </View>
      </ScrollView>

       {/* Botón flotante para acceder al chatbot */}
      <TouchableOpacity style={styles.chatbotButton} onPress={handleChatbotPress}>
        <Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
 {/* Estilos utilizados en la página */}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginHorizontal: 12,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#aaa',
    fontSize: 12,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  balanceBox: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  balanceLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  banner: {
    color: '#f39c12',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  remesa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c2c2e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  remesaName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  remesaDesc: {
    color: '#aaa',
    fontSize: 12,
  },
  remesaAmount: {
    color: '#2ecc71',
    fontSize: 14,
    fontWeight: 'bold',
  },
  chatbotButton: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    backgroundColor: '#4c3b90',
    padding: 16,
    borderRadius: 32,
    elevation: 5,
  },
});
