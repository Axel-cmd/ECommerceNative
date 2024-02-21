import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const WishListScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
      {/* Ajoutez plus de lignes de cartes si nécessaire */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%', // 48% de la largeur pour afficher deux cartes par ligne avec un peu d'espace entre elles
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default WishListScreen;
