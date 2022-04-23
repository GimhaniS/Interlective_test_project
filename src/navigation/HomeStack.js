import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CartScreen } from '../pages';
import { StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}

          // options={{
          //   title: 'Home',
          //   headerTitleAlign: 'center',
          //   headerRight: () => (
          //     <TouchableOpacity>
          //
          //     </TouchableOpacity>
          //   ),
          // }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </>
    </Stack.Navigator>
  );
};

export default HomeStack;
const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
