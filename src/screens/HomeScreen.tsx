import { ArticleList } from "components/ArticleList";
import { ViewWrapper } from "components/ViewWrapper";
import { Articles } from "models/articles";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView  } from "react-native";
import { getAllArticles } from "src/api/articles";
import { TitleHeader } from "components/TitleHeader";


export const HomeScreen = () => {
    
    const [articles, setArticles] = useState<Articles>([])

    useEffect(() => {
        getAllArticles().then( result => {
            setArticles(result)
        })
    }, [])

    return (
        <ScrollView>

            <View style={styles.container}>
                <TitleHeader label="Bonjour Lucas" />
                <View>
                    <Text style={styles.title}>Nos nouveautés</Text>
                    <ArticleList articles={articles} />
                    
                </View>
                <View>
                    <Text style={styles.title}>Collection de saision</Text>
                    <ArticleList articles={articles} />

                </View>
            </View>

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        margin: 10,
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 18,
    },
});
