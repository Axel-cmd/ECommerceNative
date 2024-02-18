import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CustomTextInput } from "./CustomTextInput";
import { useState } from "react";
import { auth } from "firebase";
import { PasswordInput } from "./PasswordInput";
import { TermsAndConditionsCheckbox }  from "./TermsAndConditionsCheckbox";
import { FormButton } from "components/buttons/FormButton";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from 'react-native-elements';

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
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return(
        <View style={style.container}>
           <View style={style.content_name_surname}>
                <View style={style.inputContainer}>
                    <CustomTextInput placeholder="Prénom" />
                </View>
                <View style={style.inputContainer}>
                    <CustomTextInput placeholder="Nom"  />
                </View>
            </View>
            <CustomTextInput placeholder="Email" value={email} setValue={setEmail} />
            <PasswordInput placeholder="Mot de passe" value={password} setValue={setPassword} />
            <PasswordInput placeholder="Confirmer le mot de passe" value={confirmPassword} setValue={setConfirmPassword} />

            <TermsAndConditionsCheckbox />

            <FormButton title="S'inscrire" onPress={handleSubmit} color="white" backgroundColor="black" />
            <Text style={style.text}>
                J’ai déjà un compte&nbsp;
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={style.link}>me connecter.</Text>
                </TouchableOpacity>
            </Text>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 100
    },
    content_name_surname: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: "100%",
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    inputContainer: {
        flex: 1,
        marginRight: 5,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    link: {
        textDecorationLine: 'underline',
    }
})