
interface CommonUserModel {
    firstname: string;
    lastname: string;
    cart: Map<string, number>;
    wishes: string[];
}

export interface DatabaseUser extends CommonUserModel {
    user_id: string;
}

export interface User extends CommonUserModel {
    id: string;
    document_id: string;
}