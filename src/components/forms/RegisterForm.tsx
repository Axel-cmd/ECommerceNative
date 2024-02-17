import { StyleSheet, View } from "react-native";
import { CustomTextInput } from "./CustomTextInput";
import { useState } from "react";
import { auth } from "firebase";
import { PasswordInput } from "./PasswordInput";
import { FormButton } from "components/buttons/FormButton";
import { useNavigation } from "@react-navigation/native";

type Props = {};

export const RegisterForm = ({}: Props) => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        if(
            email !== '' &&
            password !== '' &&
            confirmPassword === password
        ){
            const result = await auth.createUserWithEmailAndPassword(email, password);
            console.log(result)
        }
    }

    return(
        <View style={style.container}>
            <CustomTextInput placeholder="Email" value={email} setValue={setEmail} />
            <PasswordInput placeholder="Mot de passe" value={password} setValue={setPassword} />
            <PasswordInput placeholder="Confirmer le mot de passe" value={confirmPassword} setValue={setConfirmPassword} />

            <FormButton title="S'inscrire" onPress={handleSubmit} />
            <FormButton title="Connexion" onPress={() => navigation.navigate('Login')} />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
    }
})