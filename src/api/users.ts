import { fireDB } from "firebase";
import { User } from "models/user";

/**
 * Récupérer les informations d'un utilisateur grâce à son uid
 * @param id uid de l'utilisateur
 * @returns 
 */
export async function getUserDocumentByUid(id: string): Promise<User> {
    const snapshot = await fireDB.collection('users')
        .where("user_id", "==", id).get();

    const data = snapshot.docs.map( doc => ({id: doc.id, ...doc.data()}))

    const user = new User();
    user.loadFromJson(data[0])

    return user;
}