import { Article, Articles } from "models/articles";
import { getAllDocumentFromCollection } from "./request";


export async function getAllArticles(): Promise<Articles> {
    const data = await getAllDocumentFromCollection('articles')

    const articles = data.map<Article>( obj => {
        let article = new Article();
        article.loadFromJson(obj);
        return article
    })

    return articles;
}