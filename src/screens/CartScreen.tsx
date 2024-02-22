import { CartItem } from 'components/CartItem';
import { Article, Articles } from 'models/articles';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { CartSliceState, selectCart } from 'redux/slices/cartSlice';
import { selectWishList } from 'redux/slices/wishlListSlice';
import { getManyArticlesById } from 'src/api/articles';


export const CartScreen = () => {

  const reduxArticles: CartSliceState[] = useSelector(selectCart)

  const [articles, setArticles] = useState<Articles>([])

  const [totalPrice, setTotalPrice] = useState<number>(0)

  // récupération des articles à chaque fois que la valeur du redux change
  useEffect(() => {
    setArticles([]);

    console.log(reduxArticles)

    getManyArticlesById(reduxArticles.map( c => c.id)).then( r => {
      setArticles(r)
    })
  }, [reduxArticles])

  return (
    <>
    
    <View style={styles.container}>
      <ScrollView>

        {articles.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}

      </ScrollView>
    </View>
          <View style={styles.bottomCheckout}>
          <Text style={styles.CheckoutTotal}>{totalPrice} €</Text>
          <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Commander</Text>
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
