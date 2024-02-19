import { Article, Articles, DatabaseArticle } from "models/articles";
import Firebase from "firebase/compat/app"
import { fireDB } from "firebase";

const articles_collection = fireDB.collection("articles")

const converter = {
    toFirestore: (data: Article): DatabaseArticle => ({
        name: data.name,
        description: data.description,
        default_price: data.defaultPrice
    }),
    fromFirestore: (snap: Firebase.firestore.QueryDocumentSnapshot): Article => {
        const data = snap.data() as DatabaseArticle;
        const article = new Article();

        article.loadFromJson({
            id: snap.id,
            ...data
        })

        return article
    }
}
 
export async function getAllArticles(): Promise<Articles> {
    const data = await articles_collection
        .withConverter(converter)
        .get()

    return data.docs.map( obj => obj.data())
}