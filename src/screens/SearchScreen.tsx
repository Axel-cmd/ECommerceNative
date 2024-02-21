import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implémentez la logique de recherche ici
    console.log('Recherche pour : ', searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher des produits"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
      </View>
      {/* Autres composants ou contenus ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff', // Couleur de fond de l'écran
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007bff', // Couleur du bouton
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff', // Couleur du texte du bouton
    fontWeight: 'bold',
  },
});

export default SearchScreen;
