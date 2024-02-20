import { auth, fireDB } from "firebase";
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
            document_id: snap.id,
            id: data.user_id,
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

/**
 * Créer un nouvel utilisateur dans la base
 * @param user 
 * @returns
 */
export async function postUserDocument(user: User) {
    const snapshot = await user_collection.withConverter(converter).add(user);
    return snapshot.id;
}

/**
 * Mettre à jour le document d'un utilisateur
 * @param user infos de l'utilisateur à update
 * @returns 
 */
export async function updateUserDocument(update: Partial<DatabaseUser>) {

    const snapshot = await user_collection
        .where("user_id", "==", auth.currentUser?.uid)
        .withConverter(converter)
        .get()

    const user = snapshot.docs[0].data()


    if(user) {
        console.log("ici", user.document_id)
        console.log(update)
        await user_collection.doc(user.document_id)
            .update(update)
    }    
}