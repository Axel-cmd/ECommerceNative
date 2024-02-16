import { TitleText, ViewWrapper } from "components/index";
import { auth, fireDB } from "firebase"
import { useState } from "react"

export const RegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async () => {
        const result = await auth.createUserWithEmailAndPassword(email, password)
    }

    return(
        <ViewWrapper>
            <TitleText label="Inscription" />

        </ViewWrapper>
    )
}