import React from 'react';
import { TextInput, TextInputProps, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/globalStyles';

interface TextInputComponentProps extends TextInputProps {
  label?: string;
}

export const TextInputComponent: React.FC<TextInputComponentProps> = ({ label, ...restProps }) => {
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...restProps} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

