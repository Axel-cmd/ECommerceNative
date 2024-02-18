import { useEffect } from "react"
import { Text } from "react-native"
import { getAllArticles } from "src/api/articles"

export const HomeScreen = () => {
   
    const fetchArticles =  async () => {
        let articles = await getAllArticles();
        console.log(articles)
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return(
        <>
            <Text>Home</Text>
        </>
    )
}