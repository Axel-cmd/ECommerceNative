import { auth, fireDB } from "firebase"
import { useState } from "react"
import { Text } from "react-native"

export const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async () => {
        const result = await auth.createUserWithEmailAndPassword(email, password)
    }

    return(
        <Text>Register</Text>
    )
}