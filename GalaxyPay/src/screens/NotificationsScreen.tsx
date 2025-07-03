// screens/NotificationsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = new Array(6).fill({
  title: 'reminder!',
  subtitle: 'set up your automatic savings to meet your savings goal...',
  time: '17:00 - April 24',
});

export default function NotificationsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notificaciones</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map((notif, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconCircle}>
              <Ionicons name="notifications-outline" size={20} color={index === 0 ? '#fff' : '#aaa'} />
            </View>
            <View style={styles.messageBox}>
              <Text style={[styles.title, index === 0 && { color: '#e7458f' }]}>{notif.title}</Text>
              <Text style={styles.subtitle}>{notif.subtitle}</Text>
            </View>
            <Text style={styles.time}>{notif.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29292e',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#3a3a40',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  messageBox: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ccc',
  },
  subtitle: {
    fontSize: 12,
    color: '#aaa',
  },
  time: {
    fontSize: 12,
    color: '#f0813a',
    marginLeft: 10,
  },
});
