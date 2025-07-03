import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eye_off.svg";

interface Props extends React.ComponentProps<typeof TextInput> {
  error?: string;
  placeholder: string;
}

export const PasswordInput = ({ error, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.cage]}>
      <TextInput
        {...props}
        secureTextEntry={!showPassword}
        keyboardType="default"
        style={{
          flex: 1,
          ...styles.input,
        }}
        underlineColorAndroid="transparent"
      />
      <Pressable
        style={styles.eyeButton}
        onPress={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (
          <Eye width={24} color="white" />
        ) : (
          <EyeOff width={24} color="white" />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeButton: { width: 24, height: 24, position: "absolute", right: 16 },
  cage: {
    position: "relative",
    width: "100%",
    borderRadius: 16,
    // padding: 16,
    marginTop: 8,
    backgroundColor: "colors.backgrounds.secondary",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  input: {
    fontSize: 16,
    color: "white",
    width: "100%",
    padding: 16,
  },
});
