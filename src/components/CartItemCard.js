import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const img = require('../../assets/thumbnail.jpg');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CartItemCard = ({ title, img, onpress }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.itemDetailCol}>
        <Image source={{ uri: img }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onpress}>
        <Text style={styles.delete}>⛔</Text>
      </TouchableOpacity>
    </View>
  );
};

export { CartItemCard };

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth / 1.05,
    height: windowHeight / 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDetailCol: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 60,
    // paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    maxWidth: 200,
  },
  delete: {
    fontSize: 30,
  },
});
