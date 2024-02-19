import { fireDB } from "firebase";
import { DatabaseUser, User } from "models/user";
import Firebase from "firebase/compat/app"

const user_collection = fireDB.collection("users");

const converter = {
    toFirestore: (data: User): DatabaseUser => ({
        firstname: data.firstname,
        lastname: data.lastname,
        cart: data.cart,
        wishes: data.wishes,
        user_id: data.id
    }),
    fromFirestore: (snap: Firebase.firestore.QueryDocumentSnapshot): User => {
        const data = snap.data() as DatabaseUser;
        return {
            id: snap.id,
            firstname: data.firstname,
            wishes: data.wishes,
            cart: data.cart,
            lastname: data.lastname
        }
    }
}

/**
 * Récupérer les informations d'un utilisateur grâce à son uid
 * @param id uid de l'utilisateur
 * @returns 
 */
export async function getUserDocumentByUid(id: string): Promise<User> {
    const snapshot = await user_collection
    .where("user_id", "==", id)
    .withConverter(converter).get();

    const data = snapshot.docs.map( doc => doc.data()); 

    return data[0];
}

export async function postUserDocument(user: User) {
    const snapshot = await user_collection.withConverter(converter).add(user);

    console.log(snapshot)
}