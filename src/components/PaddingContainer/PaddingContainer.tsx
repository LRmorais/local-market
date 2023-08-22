import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface PaddingContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const PaddingContainer: React.FC<PaddingContainerProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

