import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Almacenamiento local persistente
import { useNavigation } from '@react-navigation/native'; // Hook para navegación entre pantallas


export default function FaceRecognitionScreen() {
  // Estado para controlar permisos de cámara
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  // Estado para saber si la cámara está lista
  const [isCameraReady, setIsCameraReady] = useState(false);
  // Estado para mostrar indicador de guardado
  const [isSaving, setIsSaving] = useState(false);
  // Referencia al componente de cámara
  const cameraRef = useRef<Camera>(null);
  const navigation = useNavigation();

  // Solicita permisos de cámara al montar el componente
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Función para capturar y guardar una selfie
  const takeSelfie = async () => {
    if (cameraRef.current && isCameraReady) {
      try {
        setIsSaving(true); // Muestra el spinner
        const photo = await cameraRef.current.takePictureAsync({ base64: true });
        await AsyncStorage.setItem('selfieUri', photo.uri); // Guarda la URI de la imagen en almacenamiento local
        Alert.alert('¡Listo!', 'Selfi guardada correctamente.');
        navigation.goBack(); // Vuelve a la pantalla anterior
      } catch (error) {
        Alert.alert('Error', 'No se pudo guardar la selfi.');
      } finally {
        setIsSaving(false); // Oculta el spinner
      }
    }
  };

  // Si aún no se ha recibido el estado del permiso, muestra mensaje de carga
  if (hasPermission === null) {
    return <View style={styles.loadingContainer}><Text>Solicitando permiso de cámara...</Text></View>;
  }

  // Si no se tienen permisos, muestra advertencia
  if (hasPermission === false) {
    return <View style={styles.loadingContainer}><Text>No se puede acceder a la cámara.</Text></View>;
  }

  // Vista principal de la pantalla de reconocimiento facial
  return (
    <View style={styles.container}>
      {/* Componente de cámara frontal */}
      <Camera
        style={styles.camera}
        type={CameraType.front}
        ref={cameraRef}
        onCameraReady={() => setIsCameraReady(true)}
      />

      {/* Botón flotante para tomar la selfie */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={takeSelfie} style={styles.captureButton} disabled={isSaving}>
          {isSaving ? (
            <ActivityIndicator size="small" color="#fff" /> // Muestra un spinner mientras guarda
          ) : (
            <Ionicons name="camera" size={40} color="#fff" /> // Ícono de cámara
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos utilizados en la página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  captureButton: {
    backgroundColor: '#4c3b90',
    borderRadius: 50,
    padding: 18,
  },
});
