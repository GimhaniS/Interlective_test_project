import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ShopCard = ({ imageUrl, title, onpress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          {isSelected ? <Text style={styles.title}>☑️</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { ShopCard };

const styles = StyleSheet.create({
  wrapper: {
    width: windowWidth / 2.2,
    height: windowHeight / 4.1,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLORS.Whitebackground,
    alignItems: 'center',
    paddingTop: 5,
  },
  image: {
    width: windowWidth / 2.5,
    height: windowHeight / 4.8,
  },
  titleView: {
    flexDirection: 'row',
  },
});
