// Pantalla de detalle de reporte de una remesa.
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Componente principal de la pantalla de reporte
export default function RemesaReporteDetalleScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.title}>Reporte</Text>

      {/* Tarjeta con los datos del movimiento */}
      <View style={styles.card}>
        {/* Encabezado de la tarjeta: avatar, nombre, parentesco y bandera */}
        <View style={styles.headerRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
          {/* Nombre y rol del destinatario */}
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Alicia Marañón Bautista</Text>
            <Text style={styles.role}>Hermana</Text>
          </View>
          {/* Bandera del país asociado */}
          <Text style={styles.flag}>🇨🇴</Text>
        </View>

        {/* Monto enviado */}
        <Text style={styles.amount}>Monto: 100,00 COP</Text>

        {/* Bloque con detalles de la transacción */}
        <View style={styles.detailBlock}>
          <Text style={styles.detailTitle}>Movimiento de Transacción de Pago – Galaxy pay</Text>

          <Text style={styles.detailText}>Fecha: 13 de mayo de 2025</Text>
          <Text style={styles.detailText}>Hora: 10:45 AM (UTC-5)</Text>
          <Text style={styles.detailText}>ID de Transacción: TXN-98456321AB</Text>

          <Text style={styles.detailText}>Usuario: Alicia Marañón Bautista</Text>
          <Text style={styles.detailText}>Correo electrónico: usuario@email.com</Text>
          <Text style={styles.detailText}>Método de Pago: Remesas Galaxy Pay</Text>
          <Text style={styles.detailText}>Últimos 4 dígitos: 1234</Text>

          <Text style={styles.detailText}>Descripción: Transferencia usuario de Galaxy Pay</Text>
          <Text style={styles.detailText}>Monto Total: 100,00 COP</Text>
          <Text style={styles.detailText}>Estado: Confirmado</Text>

          {/* Referencia interna de la plataforma */}
          <Text style={styles.detailText}>Referencia del Pago: PLATF-2025-0513-JP</Text>

          {/* Párrafo explicativo */}
          <Text style={styles.paragraph}>
            Este movimiento refleja el cobro automático correspondiente a la renovación de la suscripción activa.
            El pago ha sido procesado exitosamente a través de nuestro sistema de pasarela segura, y se ha enviado un
            comprobante al correo electrónico registrado. Para más información o en caso de requerir asistencia,
            comunícate con nuestro equipo de soporte al cliente.
          </Text>
        </View>
      </View>

      {/* Botón para volver a la pantalla anterior */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos de la pantalla
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
    marginRight: 10,
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
  role: {
    color: '#aaa',
    fontSize: 12,
  },
  flag: {
    fontSize: 18,
  },
  amount: {
    color: '#f0813a',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailBlock: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 12,
  },
  detailTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    color: '#ccc',
    fontSize: 13,
    marginBottom: 4,
  },
  paragraph: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 10,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
