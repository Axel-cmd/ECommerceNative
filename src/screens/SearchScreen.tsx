import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { TitleHeader } from "components/TitleHeader";
import { Ionicons } from '@expo/vector-icons'; // Importation de Ionicons depuis Expo
import { ViewWrapper } from 'components/ViewWrapper';

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implémentez la logique de recherche ici
    console.log('Recherche pour : ', searchQuery);
  };

  return (
    <ViewWrapper containerStyle={{paddingVertical: 0}}>
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
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
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

