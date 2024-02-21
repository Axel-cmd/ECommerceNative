import { FlatList } from "react-native";
import { CardArticle } from "./CardArticle";

interface Article {
    id: string;
    image: string;
    collection: string;
    name: string;
    default_price: string;
}

type Props = {
    articles: Article[]
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