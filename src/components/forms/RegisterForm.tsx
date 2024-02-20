import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CustomTextInput } from "./CustomTextInput";
import { useState } from "react";
import { auth } from "firebase";
import { PasswordInput } from "./PasswordInput";
import { TermsAndConditionsCheckbox }  from "./TermsAndConditionsCheckbox";
import { FormButton } from "components/buttons/FormButton";
import { useNavigation } from "@react-navigation/native";
import { postUserDocument } from "src/api/users";


export const RegisterForm = () => {

    const navigation = useNavigation();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [conditionChecked, setConditionChecked] = useState(false);


    const handleSubmit = async () => {
        if(
            email !== '' &&
            password !== '' &&
            confirmPassword === password
        ){
            const result = await auth.createUserWithEmailAndPassword(email, password);
            
            if(result.user?.uid) {
                await postUserDocument({
                    id: result.user.uid,
                    firstname: firstname,
                    lastname: lastname,
                    cart: [],
                    wishes: [],
                    document_id: ""
                })

            }

        }
    }

    const navigateToLoginScreen = () => {
        navigation.navigate('Login');
    }

    return(
        <View style={style.container}>
           <View style={style.content_name_surname}>
                <View style={{marginRight: 2.5, ...style.inputContainer}}>
                    <CustomTextInput placeholder="Prénom" value={firstname} setValue={setFirstname} />
                </View>
                <View style={{marginLeft: 2.5, ...style.inputContainer}}>
                    <CustomTextInput placeholder="Nom" value={lastname} setValue={setLastname} />
                </View>
            </View>
            <CustomTextInput placeholder="Email" value={email} setValue={setEmail} />
            <PasswordInput placeholder="Mot de passe" value={password} setValue={setPassword} />
            <PasswordInput placeholder="Confirmer le mot de passe" value={confirmPassword} setValue={setConfirmPassword} />

            <TermsAndConditionsCheckbox value={conditionChecked} setValue={setConditionChecked} />

            <FormButton title="S'inscrire" onPress={handleSubmit} color="white" backgroundColor="black" />

            <View style={style.loginLinkContainer} >

                <Text style={style.text}>
                    J’ai déjà un compte&nbsp;
                </Text>

                <TouchableOpacity onPress={navigateToLoginScreen}>
                    <Text style={style.link}>
                        me connecter.
                    </Text>
                </TouchableOpacity>

            </View>

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
        // marginRight: 5,
    },
    loginLinkContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
    },
    link: {
        fontSize: 12,
        textDecorationLine: 'underline',
    }
})