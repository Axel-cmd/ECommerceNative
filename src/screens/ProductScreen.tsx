import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { QuantityControl } from 'components/QuantityControl';
export const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const product = {
    id: '1',
    name: 'Nom du produit',
    collection: 'Collection Bite',
    description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur ',
    price: '20 €',
    image: 'https://cdn.laredoute.com/products/a/b/7/ab75e59431ee2824c424f08cd03700dd.jpg?width=1200&dpr=1',
    category: 'Catégorie du produit',
    availability: 'En stock',
    brand: 'Marque du produit',
    weight: '500g',
    dimensions: '10cm x 20cm x 5cm',
    material: 'Matériel du produit',
    color: 'Couleur du produit',
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <View style={styles.header}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
        <Text style={styles.productCollection}>{product.collection}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        {expanded && (
          <View style={styles.additionalInfo}>
            <Text style={styles.infoText}>Catégorie: {product.category}</Text>
            <Text style={styles.infoText}>Disponibilité: {product.availability}</Text>
            <Text style={styles.infoText}>Marque: {product.brand}</Text>
            <Text style={styles.infoText}>Poids: {product.weight}</Text>
            <Text style={styles.infoText}>Dimensions: {product.dimensions}</Text>
            <Text style={styles.infoText}>Matériel: {product.material}</Text>
            <Text style={styles.infoText}>Couleur: {product.color}</Text>
          </View>
        )}
        <TouchableOpacity onPress={toggleAccordion} style={styles.accordionButton}>
          <Text style={styles.accordionButtonText}>{expanded ? 'Masquer' : 'Afficher'} les détails</Text>
          <FontAwesome name={expanded ? 'angle-up' : 'angle-down'} size={20} color="white" />
        </TouchableOpacity>

        <QuantityControl quantity={quantity} setQuantity={setQuantity} />
        <TouchableOpacity style={styles.addToCartButton}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
        </TouchableOpacity>
      </View>
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

