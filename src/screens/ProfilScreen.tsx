import { Text, Button, View, StyleSheet } from "react-native"
import { useDispatch } from "react-redux"
import { setSignOut } from "redux/slices"
import { ViewWrapper } from "components/ViewWrapper";
import { TitleText } from "components/TitleText";
import { CustomTextInput } from "components/forms/CustomTextInput";
import { useEffect, useState } from "react";
import { auth } from "firebase";
import { getUserDocumentByUid } from "src/api/users";
import { User } from "models/user";

export const ProfilScreen = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState<User>(new User())

    const handleSignOut = () => {
        dispatch(setSignOut())
    }

    const getUserInformations = async () => {
        const uid = auth.currentUser?.uid;

        if(uid) {
            let result = await getUserDocumentByUid(uid);
            setUser(result)
        }
    }

    useEffect(() => {
        getUserInformations();


    }, [])

    return(
        <>
            <ViewWrapper>
                <TitleText label="Profil" />
                <Button title="Signout" onPress={handleSignOut} />
                <View style={style.content_name_surname}>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Prénom" value={user.firstname} />
                    </View>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Nom" value={user.lastname} />
                    </View>
                </View>
                {/* <CustomTextInput placeholder="Email" value={email} setValue={setEmail} /> */}
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