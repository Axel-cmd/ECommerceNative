import { ArticleList } from "components/ArticleList";
import { ViewWrapper } from "components/ViewWrapper";
import React, { useState } from "react";
import { Text, View, StyleSheet  } from "react-native";

interface Article {
    id: string;
    image: string;
    collection: string;
    name: string;
    default_price: string;
}

export const HomeScreen = () => {
    const [articles, setArticles] = useState<Article[]>([
        {
            id: "1",
            image: "https://www.bleuforet.fr/23082-home_default/chaussettes-en-coton-nage.jpg",
            collection: "Collection automne",
            name: "Paire de socks",
            default_price: "24 €",
        },
        {
            id: "2",
            image: "https://www.bleuforet.fr/23081-home_default/chaussettes-buena-vista.jpg",
            collection: "Collection branlette",
            name: "Lot de socks branlette",
            default_price: "30 €",
        },
        {
            id: "3",
            image: "https://www.bleuforet.fr/23056-home_default/chaussettes-kangourous.jpg",
            collection: "Collection branlette",
            name: "Lot de socks branlette",
            default_price: "30 €",
        },
        {
            id: "4",
            image: "https://example.com/image2.jpg",
            collection: "Collection 2",
            name: "Article 2",
            default_price: "30 €",
        },
        {
            id: "5",
            image: "",
            collection: "Collection 1",
            name: "Article 1",
            default_price: "24 €",
        },
        {
            id: "6",
            image: "",
            collection: "Collection 2",
            name: "Article 2",
            default_price: "30 €",
        },
    ]);


    return (
        <ViewWrapper>

            <View style={styles.container}>
                <Text style={styles.heading}>Bonjour lucas</Text>
                <View>
                    <Text style={styles.title}>Nos nouveautés</Text>
                    <ArticleList articles={articles} />
                    
                </View>
                <View>
                    <Text style={styles.title}>Nos nouveautés</Text>
                    <ArticleList articles={articles} />

                </View>
            </View>

            
        </ViewWrapper>
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
});
