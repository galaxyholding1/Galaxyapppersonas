import React, { useEffect, useState } from "react";
import { Alert, Pressable } from "react-native";
import ReactNativeBiometrics from "react-native-biometrics";
import FingerPrint from '../../assets/icons/fingerprint.svg';

export default function BiometryAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBiometricHardware, setHasBiometricHardware] = useState(false);

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const rnBiometrics = new ReactNativeBiometrics();
      try {
        const { available } = await rnBiometrics.isSensorAvailable();
        setHasBiometricHardware(available);
      } catch (error) {
        setHasBiometricHardware(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkBiometricSupport();
  }, []);

  const handleAuth = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (!available) {
        Alert.alert(
          "Error",
          "Tu dispositivo no soporta autenticación biométrica o no está configurada."
        );
        return;
      }

      const result = await rnBiometrics.simplePrompt({
        promptMessage: "Autenticación - Galaxy Pay",
        fallbackPromptMessage: "Usar contraseña",
      });

      if (result.success) {
        Alert.alert("Éxito", "Autenticación exitosa");
      } else {
        Alert.alert("Error", "No se pudo autenticar");
      }
    } catch (error) {
      Alert.alert("Error", "Autenticación cancelada o fallida");
    }
  };

  return (
    !isLoading &&
    hasBiometricHardware && (
      <Pressable
        style={({ pressed }) => ({ marginTop: 40, opacity: pressed ? 0.5 : 1 })}
        onPress={handleAuth}
      >
        <FingerPrint color="#E7458F" />
      </Pressable>
    )
  );
}
