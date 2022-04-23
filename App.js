import React from 'react';

import { StatusBar, StyleSheet } from 'react-native';
import HomeStack from './src/navigation/HomeStack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <HomeStack />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
