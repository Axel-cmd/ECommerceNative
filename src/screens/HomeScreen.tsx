import { ArticleList } from "components/ArticleList";
import { ViewWrapper } from "components/ViewWrapper";
import { auth } from "firebase";
import { Articles } from "models/articles";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet  } from "react-native";
import { useDispatch } from "react-redux";
import { loadWishesList } from "redux/slices/wishlListSlice";
import { getAllArticles } from "src/api/articles";
import { getUserDocumentByUid } from "src/api/users";



export const HomeScreen = () => {

    const dispatch = useDispatch();
    
    const [articles, setArticles] = useState<Articles>([])

    const doAsyncLoading = async () => {
        // récupérer l'utilisateur actuel
        if(auth.currentUser?.uid){
            let user = await getUserDocumentByUid(auth.currentUser?.uid)
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
