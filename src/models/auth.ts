import { User } from "./user";

/**
 * Définit l'état du slice d'authentication
 */
export interface AuthSliceState {
    isLoggedIn: boolean;
    userFirstName: string;
}