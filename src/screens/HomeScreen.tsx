import { ArticleList } from "components/ArticleList";
import { ViewWrapper } from "components/ViewWrapper";
import { Articles } from "models/articles";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet  } from "react-native";
import { getAllArticles } from "src/api/articles";



export const HomeScreen = () => {
    
    const [articles, setArticles] = useState<Articles>([])

    useEffect(() => {
        getAllArticles().then( result => {
            setArticles(result)
        })
    }, [])

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
