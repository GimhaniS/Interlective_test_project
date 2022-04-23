import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../Colors';
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading.....</Text>
    </View>
  );
};

export { LoadingScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: COLORS.fontColor,
  },
});
