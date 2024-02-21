import React, { useEffect, useState } from "react";
import { Button, TouchableOpacity ,Text, View, Image, StyleSheet, Dimensions, FlatList, ScrollView  } from "react-native";
import { useDispatch } from "react-redux";

const { width: screenWidth } = Dimensions.get("window");

interface Article {
    id: string;
    image: string;
    collection: string;
    name: string;
    price: string;
}

export const HomeScreen = () => {
    const [articles, setArticles] = useState<Article[]>([
        {
            id: "1",
            image: "https://www.bleuforet.fr/23082-home_default/chaussettes-en-coton-nage.jpg",
            collection: "Collection automne",
            name: "Paire de socks",
            price: "24 €",
        },
        {
            id: "2",
            image: "https://www.bleuforet.fr/23081-home_default/chaussettes-buena-vista.jpg",
            collection: "Collection branlette",
            name: "Lot de socks branlette",
            price: "30 €",
        },
        {
            id: "1",
            image: "https://www.bleuforet.fr/23056-home_default/chaussettes-kangourous.jpg",
            collection: "Collection branlette",
            name: "Lot de socks branlette",
            price: "30 €",
        },
        {
            id: "2",
            image: "https://example.com/image2.jpg",
            collection: "Collection 2",
            name: "Article 2",
            price: "30 €",
        },
        {
            id: "1",
            image: "",
            collection: "Collection 1",
            name: "Article 1",
            price: "24 €",
        },
        {
            id: "2",
            image: "",
            collection: "Collection 2",
            name: "Article 2",
            price: "30 €",
        },
    ]);

    const renderArticleItem = ({ item }: { item: Article }) => (
        <View style={styles.articleItem}>
            <Image
                source={{ uri: item.image }}
                style={styles.image}
            />
            <View style={styles.articleText}>
                <Text style={styles.collection}>{item.collection}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => alert("Added to wishlist")} style={styles.heartContainer}>
                <Text style={styles.heart}>♥️</Text>
            </TouchableOpacity>        
            </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Bonjour lucas</Text>
            <View>
                <Text style={styles.title}>Nos nouveautés</Text>
                <FlatList
                    data={articles}
                    renderItem={renderArticleItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Ajoutez cette ligne
                />
            </View>
            {/* <View>
                <Text style={styles.title}>Collections de saison</Text>
                <FlatList
                    data={articles}
                    renderItem={renderArticleItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false} // Ajoutez cette ligne
                />
            </View> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "300",
        fontFamily: "Barlow",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 50
    },
    title: {
        margin: 10,
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 18,
    },
    articleItem: {
        borderRadius: 10,
        margin: 10,
        width: 170,
        height: 300,
        position: "relative",
    },
    articleText: {
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        marginLeft: 0,

    },
    image: {
        width: 170,
        height: 170,
        marginBottom: 10,
        resizeMode: "cover",
        borderRadius: 10,
    },
    collection: {
        fontSize: 14,
        fontWeight: "100",
        marginBottom: 5,
        textAlign: "left",
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "300",
        marginBottom: 10,
    },
    heartContainer: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "transparent",
    },
    heart: {
        fontSize: 24,
    },
});
