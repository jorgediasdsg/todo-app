import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar
        style='light'
        translucent
      />
      <Home />
    </>
  );
}