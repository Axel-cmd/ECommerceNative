import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TitleHeader } from "components/TitleHeader";
import { Ionicons } from '@expo/vector-icons'; // Importation de Ionicons depuis Expo

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implémentez la logique de recherche ici
    console.log('Recherche pour : ', searchQuery);
  };

  return (
    <View style={styles.container}>
        <TitleHeader label="Rechercher des articles" />
        <View style={styles.searchContainer}>
            <TextInput
            style={styles.searchInput}
            placeholder="Rechercher des produits"
            value={searchQuery}
            onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Ionicons name="search" size={24} color="white" /> 
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    height: 56,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#000', // Couleur du bouton
    borderRadius: 16,
    height: 56,
    width: 56,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
  },
  buttonText: {
    color: '#fff', // Couleur du texte du bouton
    fontWeight: 'bold',
  },
});

