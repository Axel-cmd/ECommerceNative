import { RegisterForm } from "components/forms/RegisterForm";
import { TitleText, ViewWrapper } from "components/index";
import { StyleSheet, View } from "react-native";

export const RegisterScreen = () => {
    return(
        <ViewWrapper>
            <View style={style.container}>
                <TitleText label="Inscription" />
                <RegisterForm />

            </View>
        </ViewWrapper>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
})