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
import { FormButton } from "components/index";

export const ProfilScreen = () => {
    const dispatch = useDispatch()

    const [userEmail, setUserEmail] = useState("");

    const [user, setUser] = useState<User>({
        cart: [],
        firstname: "",
        id: "",
        lastname: "",
        wishes: [],
        document_id: ''
    })

    const handleSignOut = () => {
        dispatch(setSignOut())
    }

    const getUserInformations = async () => {
        const uid = auth.currentUser?.uid;
        const email = auth.currentUser?.email
        if(email) {
            setUserEmail(email)
        }

        if(uid) {
            let result = await getUserDocumentByUid(uid);
            setUser(result)
            console.log(result)
        }
    }

    useEffect(() => {
        getUserInformations();


    }, [])

    return(
        <>
            <ViewWrapper>
                <TitleText label="Profil" />
                <View style={style.content_name_surname}>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Prénom" value={user.firstname} setValue={(value) => setUser({...user, firstname: value})}
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <CustomTextInput placeholder="Nom" value={user.lastname} setValue={(value) => setUser({...user, lastname: value})} />
                    </View>
                </View>
                <CustomTextInput placeholder="Email" value={userEmail} setValue={setUserEmail} />

                <TitleText label="Localisation" />


                <FormButton title="Déconnexion" onPress={handleSignOut} />

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