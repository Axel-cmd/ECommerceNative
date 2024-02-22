import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { QuantityControl } from 'components/QuantityControl';
import { Article, Articles } from 'models/articles';
import { getManyArticlesById } from 'src/api/articles';
import { storage } from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { CartSliceState, addItemToCart, selectCart } from 'redux/slices/cartSlice';
import { updateUserDocument } from 'src/api/users';

type Props = {
  route: any
}

export const ProductScreen = ({route}: Props) => {

  const dispatch = useDispatch();

  const cartList: CartSliceState[] = useSelector(selectCart)

  const [article, setArticle] = useState<Article>();

  const [imgUrl, setImgUrl] = useState("")

  const { articleId } = route.params;

  useEffect( () => {
    console.log(articleId)

    getManyArticlesById([articleId])
    .then( (r: Articles) => {

      let result = r[0]

      storage.ref(result.image).getDownloadURL()
      .then( img => {
        setImgUrl(img)
      })
      setArticle(result);
    })


  }, [])

  const addToCart = () => {
    if( article != undefined){

      dispatch(addItemToCart({
        id: article.id,
        quantity: quantity
      }))

    }
  }



  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      {
        article &&
        (
          <>
          <Image source={{ uri: imgUrl != '' ? imgUrl : undefined }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <View style={styles.header}>
              <Text style={styles.productName}>{article.name}</Text>
              <Text style={styles.productPrice}>{article.defaultPrice} €</Text>
            </View>
            <Text style={styles.productCollection}>{article.collection}</Text>
            <Text style={styles.productDescription}>{article.description}</Text>
           
            <QuantityControl quantity={quantity} setQuantity={setQuantity} />
            <TouchableOpacity style={styles.addToCartButton} onPress={addToCart} >
              <FontAwesome name="shopping-cart" size={24} color="white" />
              <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
            </TouchableOpacity>
          </View>
          </>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    color: '#333',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  productCollection: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
  },
  additionalInfo: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
    marginLeft: 10,
  },
  addToCartButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 16,
    marginTop: 10,
    height: 56
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  accordionButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accordionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

