import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectWishList } from 'redux/slices/wishlListSlice';
import { getManyArticlesById } from 'src/api/articles';
import { TitleText } from 'components/TitleText';
import { CardArticle } from 'components/CardArticle';
import { Articles } from 'models/articles';
import { TitleHeader } from "components/TitleHeader";

export const WishListScreen = () => {
  const userWishList: string[] = useSelector(selectWishList);
  const [wishList, setWishList] = useState<Articles>([]);

  useEffect(() => {
    setWishList([]);
    // Récupérer les articles liés à l'utilisateur
    getManyArticlesById(userWishList).then(r => {
      setWishList(r);
    });
  }, [userWishList]);

  // Fonction pour diviser la liste d'articles en paires
  const splitArrayIntoPairs = (array: any[], pairSize: number) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += pairSize) {
      pairs.push(array.slice(i, i + pairSize));
    }
    return pairs;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TitleHeader label="Ma liste d'envie" />
      {/* Divise la liste d'articles en paires et map chaque paire dans une rangée */}
      {splitArrayIntoPairs(wishList, 2).map((pair, index) => (
        <View key={index} style={styles.row}>
          {/* Map chaque article dans la paire */}
          {pair.map((article, index) => (
            <CardArticle key={index} article={article} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
