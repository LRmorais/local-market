import { StyleSheet } from 'react-native';

export const colors: Record<string, string> = {
  primary: '#FEBD2E',
  secondary: '#F8F8F8',
  tertiary: '#000000'
}

export const fontSize: Record<string, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});