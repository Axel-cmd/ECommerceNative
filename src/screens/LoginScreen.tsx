import { Button, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"

import { User } from "models/index";
import { setSignIn } from "redux/slices";
import { ViewWrapper } from "components/ViewWrapper";
import { TitleText } from "components/TitleText";
import { LoginForm } from "components/forms/LoginForm";
import { useEffect } from "react";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // const handleLogin = () => {
    //     dispatch(setSignIn("Axel"))
    // }

    return(
        <ViewWrapper>
            <View style={styles.container} >
                <TitleText label="Connexion" />
                <LoginForm />
            </View>
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
})