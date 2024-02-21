import { StyleSheet, View } from "react-native"
import { CustomTextInput } from "./CustomTextInput"
import { useState } from "react"
import { PasswordInput } from "./PasswordInput";
import { FormButton } from "components/buttons/FormButton";
import { auth } from "firebase";
import { useDispatch } from "react-redux";
import { setSignIn } from "redux/slices";
import { loadWishesFromFirestore } from "redux/slices/wishlListSlice";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email == '' || password == '') return;

        auth.signInWithEmailAndPassword(email, password)
            .then( result => {
                dispatch(setSignIn(result.user?.email))
            })
            .catch( (err: any) => {
                console.log(err)
            })
    }

    return(
        <View style={style.container} >
            <CustomTextInput placeholder="Email" setValue={setEmail} value={email}  />
            <PasswordInput placeholder="Mot de passe" setValue={setPassword} value={password} />
            <FormButton title="Se connecter" onPress={handleLogin} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 100
    }
})