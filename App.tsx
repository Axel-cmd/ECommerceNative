import { StatusBar } from 'expo-status-bar';
import { AppRoute } from 'navigations/Navigator';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <AppRoute />
      <StatusBar style='auto' />
    </>
  );
}

