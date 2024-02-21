import { Article } from "models/articles";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";

type Props = {
    article: Article
}

export const CardArticle = ({article}: Props) => {
      
    return (
        <View style={styles.articleItem}>
            <Image
                source={{ uri: article.image !== "" ? article.image : undefined }}
                style={styles.image}
            />
            <View style={styles.articleText}>
                <Text style={styles.collection}>{article.collection}</Text>
                <Text style={styles.name}>{article.name}</Text> 
                <Text style={styles.price}>{article.defaultPrice} €</Text>
            </View>
            <TouchableOpacity onPress={() => alert("Added to wishlist")} style={styles.heartContainer}>
                <Text style={styles.heart}>♥️</Text>
            </TouchableOpacity>        
        </View>
    )
}

const styles = StyleSheet.create({
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
        backgroundColor: "lightgrey"
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
})