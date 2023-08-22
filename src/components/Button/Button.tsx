import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { colors, fontSize } from '../../styles/globalStyles';
 
interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  outline?: boolean;
}

export  const Button: React.FC<ButtonProps> = ({ label, onPress, outline = false, style, ...restProps }) => {
  const buttonStyles: StyleProp<ViewStyle> = outline ? styles.outlineButton : styles.defaultButton;
  const buttonTextStyles: StyleProp<TextStyle> = outline ? styles.outlineButton : styles.defaultButtonText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyles, style]} onPress={onPress} {...restProps}>
      <Text style={buttonTextStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: colors.primary,
  },
  outlineButton: {
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.tertiary,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  defaultButtonText: {
    color: colors.secondary,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
});
