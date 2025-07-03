// Pantalla de "Actualizaciones" que muestra un resumen de movimientos recientes.
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Componente principal
export default function MovimientosActualizacionesScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        {/* Saludo al usuario */}
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subtitle}>Buenos días</Text>
        </View>

        {/* Iconos de notificación y menú */}
        <View style={styles.headerRight}>
          {/* Botón de notificaciones */}
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            {/* Badge con número de notificaciones */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>

          {/* Botón de menú/hamburger */}
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta de detalle de movimiento */}
      <View style={styles.card}>
        <Text style={styles.title}>Detalle de los movimientos</Text>

        {/* Tabs para cambiar de vista (solo UI) */}
        <View style={styles.tabs}>
          {/* Tab activa: Actualizaciones */}
          <TouchableOpacity style={styles.tabActive}>
            <Ionicons name="time-outline" size={18} color="#fff" />
            <Text style={styles.tabTextActive}>Actualizaciones</Text>
          </TouchableOpacity>

          {/* Tab inactiva: Detalles */}
          <TouchableOpacity style={styles.tab}>
            <Ionicons name="card-outline" size={18} color="#fff" />
            <Text style={styles.tabText}>Detalles</Text>
          </TouchableOpacity>
        </View>

        {/* Movimiento destacado */}
        <View style={styles.movementHeader}>
          {/* Icono del comercio */}
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="hamburger" size={22} color="#fff" />
          </View>

          {/* Información del movimiento */}
          <View style={{ flex: 1 }}>
            <Text style={styles.movementTitle}>Burguer King</Text>
            <Text style={styles.movementDate}>17:00 - April 24</Text>
          </View>

          {/* Monto (negativo = gasto) */}
          <Text style={styles.movementAmount}>-$100,00</Text>
        </View>

        {/* Fecha completa de la transacción */}
        <Text style={styles.dateComplete}>
          Completada: miércoles, 2 de abril de 2025, 17:56
        </Text>

        {/* Línea de tiempo */}
        <View style={styles.timeline}>
          {/* Paso 1 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineLabel}>Ayer</Text>
            <Text style={styles.timelineText}>Creaste tu transferencia</Text>
          </View>

          {/* Paso 2 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineLabel}>Ayer</Text>
            <Text style={styles.timelineText}>Hemos recibido tus EUR</Text>
          </View>

          {/* Paso 3 (destacado) */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineDotPink} />
            <Text style={styles.timelineLabel}>Ayer</Text>
            <Text style={styles.timelineTextPink}>
              Tu dinero ha sido enviado de tu balance en EUR
            </Text>
            <Text style={styles.amountText}>Has enviado 25,14 EUR.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Estilos utilizados en la pantalla

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
    marginBottom: 16,
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
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#444',
  },
  tabActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#e7458f',
  },
  tabText: {
    color: '#ccc',
    marginLeft: 5,
  },
  tabTextActive: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  movementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBox: {
    backgroundColor: '#e7458f',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  movementTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  movementDate: {
    color: '#aaa',
    fontSize: 12,
  },
  movementAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateComplete: {
    color: '#aaa',
    fontSize: 13,
    marginVertical: 10,
  },
  timeline: {
    marginTop: 10,
  },
  timelineItem: {
    marginBottom: 16,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#aaa',
    marginBottom: 4,
  },
  timelineDotPink: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e7458f',
    marginBottom: 4,
  },
  timelineLabel: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 2,
  },
  timelineText: {
    color: '#ccc',
    fontSize: 13,
  },
  timelineTextPink: {
    color: '#e7458f',
    fontSize: 13,
  },
  amountText: {
    color: '#f0813a',
    fontSize: 13,
    marginTop: 4,
  },
});
