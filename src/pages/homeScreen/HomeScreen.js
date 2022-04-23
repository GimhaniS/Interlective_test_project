import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../../Colors';

import { getShopItems } from '../../store/actions/HomeActions';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../loadingScreen/LoadingScreen';
import { ShopCard } from '../../components';
import { addItemToCart } from '../../store/actions/CartActions';

const HomeScreen = ({ navigation }) => {
  const { shopItem } = useSelector((state) => state.homeReducer);
  const { cartItem } = useSelector((state) => state.cartReducer);
  const [selected, setSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemArray, setItemArray] = useState([]);
  const [edited, setEdited] = useState(false);
  const [numOfCol, setNumOfCol] = useState(2);
  const dispatch = useDispatch();

  const getData = async () => {
    setIsLoading(false);
    const res = await dispatch(getShopItems());
    console.log('res====>', res);
  };
  console.log('cartItem====>', cartItem);

  useEffect(() => {
    setEdited(true);
    setIsLoading(true);
    getData();
  }, []);

  const renderItems = ({ item }) => {
    return (
      <ShopCard
        title={item.title}
        imageUrl={item.thumbnail}
        isSelected={item.isSelected}
        onpress={() => ItemSelectHandler(item.id)}
      />
    );
  };

  useEffect(() => {
    const temp = shopItem.products;
    console.log('data====', temp);
    console.log('shopItem====', shopItem);
    temp.map((el) => {
      el.isSelected = false;
      return true;
    });

    setItemArray(shopItem.products);
  }, []);

  const ItemSelectHandler = async (id) => {
    console.log('item clicked');
    const data = shopItem.products;
    data.map(async (el) => {
      if (el.id === id) {
        el.isSelected = !el.isSelected;
        setSelected(el.isSelected);
      }
    });
    let temp = data;
    const arr = temp
      .filter((arr) => {
        return arr.isSelected === true;
      })
      .map((arr) => arr);

    const res = dispatch(addItemToCart(arr));
    console.log('res====>', res);
    setItemArray(data);
    setEdited(!edited);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.homeText}>Home </Text>
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => navigation.navigate('CartScreen')}
          testID="cartIcon"
        >
          <Text style={styles.cartAmount}>{cartItem.length}</Text>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={itemArray}
          extraData={itemArray}
          numColumns={numOfCol}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  body: {
    flex: 15,
    backgroundColor: COLORS.bodyBackground,
    paddingLeft: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  homeText: {
    color: COLORS.fontColor,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 130,
  },
  iconView: {
    flexDirection: 'row',
    paddingLeft: 40,
  },
  cartIcon: {
    color: COLORS.fontColor,
    fontSize: 25,
    fontWeight: '700',
    paddingLeft: 3,
  },
  cartAmount: {
    color: COLORS.fontColor,
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
