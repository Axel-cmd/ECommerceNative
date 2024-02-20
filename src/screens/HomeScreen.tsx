import { ViewWrapper } from "components/ViewWrapper"
import { Article, Articles } from "models/articles"
import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addItemToWishList, selectWishList } from "redux/slices/wishlListSlice"
import { getAllArticles } from "src/api/articles"

export const HomeScreen = () => {

    const dispatch = useDispatch();


    const [articles, setArticles] = useState<Articles>([]);

   
    const fetchArticles =  async () => {
        let test = await getAllArticles();
        setArticles(test)
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    const addToWishList = (article: Article) => {
        dispatch(addItemToWishList(article.id))
    }

    return(
        <ViewWrapper>
            <Text>Home</Text>

            { articles.length > 0 
                && articles.map( (article) => (
                    <View>
                        <Text>{article.name}</Text>
                        <Button title="ajouté à la wishlist" onPress={() => addToWishList(article)} />

                    </View>
                ))

            }

        </ViewWrapper>
    )
}