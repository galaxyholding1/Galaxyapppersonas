import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  useColorScheme,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, style, ...props }: InputProps) => {
  return <TextInput style={[styles.input]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    marginTop: 8,
  },
});
