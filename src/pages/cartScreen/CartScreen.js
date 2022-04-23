import { StyleSheet, TouchableOpacity, FlatList, Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../../Colors';

const back = require('../../assets/back.png');
import { CartItemCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../store/actions/CartActions';
const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cartItem, totalAmount } = useSelector((state) => state.cartReducer);
  useEffect(() => {
    console.log('cart screen data======>', cartItem);
    console.log('totalAmount======>', totalAmount);
  }, []);

  const itemRemoveHandler = (item) => {
    const res = dispatch(removeItemFromCart(item));
    console.log('res====>', res);
  };
  const renderItems = ({ item }) => {
    return (
      <CartItemCard
        title={item.title}
        img={item.thumbnail}
        onpress={() => itemRemoveHandler(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconView} onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.back} />
          <Text style={styles.homeText}>Home </Text>
        </TouchableOpacity>
        <Text style={styles.cartText}>Cart </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.amountView}>
          <Text style={styles.amountIconText}>💵 </Text>
          <Text style={styles.amountText}>{totalAmount} </Text>
        </View>
        <FlatList
          data={cartItem}
          extraData={cartItem}
          keyExtractor={(item) => item.id}
          renderItem={renderItems}
        />
      </View>
    </View>
  );
};

export { CartScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,

    alignItems: 'center',

    paddingLeft: 10,
    flexDirection: 'row',
  },
  body: {
    flex: 15,
    backgroundColor: COLORS.bodyBackground,
    paddingLeft: 10,
    paddingTop: 20,
    // alignItems: 'center',
  },
  homeText: {
    color: COLORS.fontBlueColor,
    fontSize: 20,
    fontWeight: '700',
  },
  cartText: {
    color: COLORS.fontColor,
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 140,
  },
  iconView: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  back: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  amountText: {
    color: COLORS.fontColor,
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 10,
  },
  amountIconText: {
    color: COLORS.fontColor,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
