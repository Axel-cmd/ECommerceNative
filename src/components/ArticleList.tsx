import { FlatList } from "react-native";
import { CardArticle } from "./CardArticle";
import { Article, Articles } from "models/articles";

type Props = {
    articles: Articles
};

export const ArticleList = ({articles}: Props) => {

    const renderArticleItem = ({ item }: { item: Article }) => (
        <CardArticle article={item} />
    );

    return(
        <FlatList
            data={articles}
            renderItem={renderArticleItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false} // Ajoutez cette ligne
        />
    )
}