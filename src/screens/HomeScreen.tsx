import { ArticleList } from "components/ArticleList";
import { TitleHeader } from "components/TitleHeader";
import { auth } from "firebase";
import { Articles } from "models/articles";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView  } from "react-native";
import { useDispatch } from "react-redux";
import { loadWishesList } from "redux/slices/wishlListSlice";
import { getAllArticles } from "src/api/articles";
import { getUserDocumentByUid } from "src/api/users";

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState("")
    
    const [articles, setArticles] = useState<Articles>([])

    const doAsyncLoading = async () => {
        // récupérer l'utilisateur actuel
        if(auth.currentUser?.uid){
            let user = await getUserDocumentByUid(auth.currentUser?.uid)
            // garder le firstname de l'utilisateur actuellement connecté
            setFirstname(user.firstname)
            // charger la wishlist dans le reducer
            dispatch(loadWishesList(user.wishes))
        }

        // récupérer les articles
        let result = await getAllArticles();
        setArticles(result)
    }

    useEffect(() => {
        doAsyncLoading();
    }, [])

    return (
        <ScrollView>

            <View style={styles.container}>
                <TitleHeader label={"Bonjour " + firstname} />
                <View>
                    <Text style={styles.title}>Nos nouveautés</Text>
                    <ArticleList articles={articles} />
                    
                </View>
                <View>
                    <Text style={styles.title}>Collection de saison</Text>
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
