import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Article 1',
      collection: 'Collection 1',
      price: '20 €',
      quantity: 2,
      image:
        'https://cdn.laredoute.com/products/a/b/7/ab75e59431ee2824c424f08cd03700dd.jpg?width=1200&dpr=1',
    },
    {
        id: '2',
        name: 'Article 1',
        collection: 'Collection 1',
        price: '20 €',
        quantity: 2,
        image:
          'https://cdn.laredoute.com/products/a/b/7/ab75e59431ee2824c424f08cd03700dd.jpg?width=1200&dpr=1',
      },
  ]);

  const increaseQuantity = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <>
    
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemName}>{item.collection}</Text>
              <View style={styles.containerItemPrice}>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <View style={styles.itemQuantity}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Ionicons style={styles.iconTrash} name="trash" size={24} color="black" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
          <View style={styles.bottomCheckout}>
          <Text style={styles.CheckoutTotal}>300</Text>
          <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Payement</Text>
          </TouchableOpacity>
        </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    position: 'relative',
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 5,
  },
  containerItemPrice: {
    backgroundColor: "black",
    borderRadius: 16,
    fontSize: 16,
    position: "absolute",
    bottom: 0,
    right: 0,

  },
  itemPrice: {
    color: "#fff",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
},
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  iconTrash: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bottomCheckout: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  CheckoutTotal:{
    fontSize: 20,
    fontWeight:"bold",
    width: "30%",
    textAlign:"center"
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 16,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 18,
    width: "70%"
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
