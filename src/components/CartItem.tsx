import { Article } from "models/articles"
import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { storage } from "firebase";

type Props = {
    item: Article
}

export const CartItem = ({item}: Props) => {

    const [quantity, setQuantity] = useState(1)

    // useState pour l'url de l'image 
    const [imgUrl, setImgUrl] = useState("")

    const increaseQuantity = () => {
        setQuantity(quantity+1);
    };
    
    const decreaseQuantity = () => {
        setQuantity(quantity-1)
    };

    useEffect(() => {
        storage.ref(item.image).getDownloadURL()
            .then( r => {
                console.log(r)
                setImgUrl(r);

            })
    }, [])

    return (
        <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: imgUrl != "" ? imgUrl : undefined }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={[styles.itemName, styles.itemCollection]}>{item.collection}</Text>
            <View style={styles.containerItemPrice}>
                <Text style={styles.itemPrice}>{item.defaultPrice * quantity} €</Text>
            </View>
            <View style={styles.itemQuantity}>
                <TouchableOpacity onPress={decreaseQuantity}>
                <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Ionicons style={styles.iconTrash} name="trash" size={24} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    itemCollection: {
        fontWeight: "100",
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
  });
  