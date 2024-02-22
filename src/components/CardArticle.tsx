import { useNavigation } from "@react-navigation/native";
import { storage } from "firebase";
import { Article } from "models/articles";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishList, removeItemFormWishList, selectWishList } from "redux/slices/wishlListSlice";
import { updateUserDocument } from "src/api/users";

type Props = {
    article: Article
}

export const CardArticle = ({article}: Props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    // useState pour l'url de l'image 
    const [imgUrl, setImgUrl] = useState("")

    // récupérer la liste des envies dans le redux
    const userWishList: string[] = useSelector(selectWishList)

    /**
     * Méthode qui permet de faire le toggle d'un article dans la liste d'envies
     */
    const toggleAddRemoveFromWishlist = async () => {
        if(userWishList.includes(article.id)) {

            const wishList = userWishList.filter( (w) => w !== article.id)

            dispatch(removeItemFormWishList(article.id))

            await updateUserDocument({
                wishes: wishList
            })

        }
        else {
            await updateUserDocument({
                wishes: [...userWishList, article.id]
            }).then( () => {
                dispatch(addItemToWishList(article.id))
            })
        }
    }


    /**
     * Récupérer l'image lors de la création du composant
     */
    useEffect(() => {
        storage.ref(article.image).getDownloadURL()
            .then( r => {
                setImgUrl(r);
            })
    }, [])

      
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>

            <Image
                source={ { uri : imgUrl != '' ? imgUrl : undefined }} 
                style={styles.image}
            />
                <View style={styles.articleText}>
                    <Text style={styles.collection}>{article.collection}</Text>
                    <Text style={styles.name}>{article.name}</Text> 
                    <Text style={styles.price}>{article.defaultPrice} €</Text>
                    
                </View>

                {/* <CheckBox
                        containerStyle={{
                            margin: 5,
                            padding: 0
                        }}
                        size={18}
                        checked={true}
                        iconType="ionicon"
                        checkedIcon="cart"
                        uncheckedIcon="cart-outline"
                        checkedColor="black"
                        onPress={toggleAddRemoveFromWishlist}
                    /> */}

            

            <View style={styles.heartContainer} >
                <CheckBox
                    size={18}
                    containerStyle={styles.heart}
                    checked={userWishList.includes(article.id)}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="red"
                    onPress={toggleAddRemoveFromWishlist}
                />


                    <View style={styles.articleText}>
                        <Text style={styles.collection}>{article.collection}</Text>
                        <Text style={styles.name}>{article.name}</Text> 
                        <Text style={styles.price}>{article.defaultPrice} €</Text>
                        
                    </View>

                    {/* <CheckBox
                            containerStyle={{
                                margin: 5,
                                padding: 0
                            }}
                            size={18}
                            checked={true}
                            iconType="ionicon"
                            checkedIcon="cart"
                            uncheckedIcon="cart-outline"
                            checkedColor="black"
                            onPress={toggleAddRemoveFromWishlist}
                        /> */}

                

                <View style={styles.heartContainer} >
                    <CheckBox
                        size={18}
                        containerStyle={styles.heart}
                        checked={userWishList.includes(article.id)}
                        checkedIcon="heart"
                        uncheckedIcon="heart-o"
                        checkedColor="red"
                        onPress={toggleAddRemoveFromWishlist}
                    />

                </View>

                

            </View>
        </TouchableOpacity>

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
        borderRadius: 20,
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
        margin: 10,
        padding: 0
    },
})