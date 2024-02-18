import { fireDB } from "firebase";

/**
 * Récupérer tous les documents d'une collection
 * @param collection 
 * @returns 
 */
export async function getAllDocumentFromCollection(collection: string) {
    const snapshot = await fireDB.collection(collection).get();
    // renvoyer les données dans les documents du snapshot avec leur id
    return snapshot.docs.map( doc => ({ id: doc.id , ...doc.data()}))
}
