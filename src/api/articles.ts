import { Article, Articles, DatabaseArticle } from "models/articles";
import Firebase from "firebase/compat/app"
import { fireDB } from "firebase";

const articles_collection = fireDB.collection("articles")

const converter = {
    toFirestore: (data: Article): DatabaseArticle => ({
        name: data.name,
        description: data.description,
        default_price: data.defaultPrice,
        collection: data.collection,
        image: data.image
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

export async function getManyArticlesById(articlesId: string[]): Promise<Articles> {
    const data = await articles_collection.withConverter(converter).where(Firebase.firestore.FieldPath.documentId(), 'in', articlesId).get();


    return data.docs.map( doc => doc.data());
}