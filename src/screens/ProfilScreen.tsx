import { Text, Button, View, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { setSignOut } from "redux/slices"
import { ViewWrapper } from "components/ViewWrapper";
import { TitleText } from "components/TitleText";
import { CustomTextInput } from "components/forms/CustomTextInput";

export const ProfilScreen = () => {

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(setSignOut())
    }
    return(
        <>
            <ViewWrapper>
                <TitleText label="Connexion" />
                <Button title="Signout" onPress={handleSignOut} />
                <View style={style.content_name_surname}>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Prénom"  />
                    </View>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Nom"  />
                    </View>
                </View>
                <CustomTextInput placeholder="Email" value={email} setValue={setEmail} />
            </ViewWrapper>
        </>

    )
}

const style = StyleSheet.create({
    container: {
        width: "90%",
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