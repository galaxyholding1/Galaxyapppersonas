import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Input } from "../components/Input";
import Logo from "../../assets/images/galaxy_logo1.svg";
import { Link } from "@react-navigation/native";
import BiometryAuth from "../components/auth/ByometryAuth";
import { PasswordInput } from "../components/auth/PasswordInput";

export default function LoginScreen() {
  const handleLogin = () => {

  }
  return (
    // El padding es espacio para clave dinamica
    <View style={[styles.pageContainer, { paddingTop: 100 }]}>
      <Logo style={styles.image} />
      <Text style={styles.subtitle}>
        Inicia sesión {"\n"} en Galaxy Pay
      </Text>
      <Input placeholder="Usuario" />
      <PasswordInput placeholder="Contraseña" />

      <TouchableOpacity style={styles.registerBtn} onPress={handleLogin}>
        <Text style={styles.textCenter}>Iniciar sesión</Text>
      </TouchableOpacity>
      <Link style={styles.forgotPasswordText} href="/" action={{ type: "" }}>
        ¿has olvidado tu contraseña?
      </Link>
      <BiometryAuth/>
      <View style={{ flex: 1 }}></View>
      <Text style={[styles.textCenter, styles.termsText]}>
        Al continuar, confirmas que estás de acuerdo con los Términos de
        servicio de Galaxy Pay y has leído la Política de privacidad de Galaxy
        Pay
      </Text>
      <Text style={[styles.textCenter, styles.registerText]}>
        ¿No tienes una cuenta?{" "}
        <Link style={styles.forgotPasswordText} href="/" action={{ type: "" }}>
          Registrarse
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    aspectRatio: 322 / 76,
    resizeMode: "contain",
    marginBottom: 50,
  },
  forgotPasswordText: { fontSize: 14, alignSelf: "flex-end", color: "#fff" },
  termsText: { fontSize: 12, marginBottom: 15 },
  registerText: { fontSize: 14 },
  subtitle: { fontSize: 28, marginBottom: 50, textAlign: "center" },
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    padding: 16,
  },
  textCenter: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  registerBtn: {
    backgroundColor: "#ec008c",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
});
