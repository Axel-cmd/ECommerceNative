import { Article } from "models/articles";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { selectWishList } from "redux/slices/wishlListSlice";

type Props = {
    article: Article
}

export const CardArticle = ({article}: Props) => {

    const userWishList: string[] = useSelector(selectWishList)

    const dispatch = useDispatch();

    const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

    const toggleAddRemoveFromWishlist = () => {
        setIsWishlisted(!isWishlisted)
    }

    // à l'initialisation pour savoir si l'objet est dans la wishlist
    useEffect(() => {
        console.log(userWishList)
        const isInWishlist = userWishList.includes(article.id)
        console.log(isInWishlist)
        setIsWishlisted(isInWishlist)

    }, [userWishList])
      
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

            <View style={styles.heartContainer} >
                <CheckBox
                    size={15}
                    containerStyle={styles.heart}
                    checked={isWishlisted}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="red"
                    onPress={toggleAddRemoveFromWishlist}
                />

            </View>
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
        height: 200,
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
        top: 0,
        right: 0,
        margin: 0,
        padding: 0,
    },
    heart: {
        margin: 5,
        padding: 0
    },
})