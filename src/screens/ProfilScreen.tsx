import { Button, Text } from "react-native"
import { useDispatch } from "react-redux"
import { setSignOut } from "redux/slices"

export const ProfilScreen = () => {

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(setSignOut())
    }


    return(
        <>
            <Text>Profil</Text>
            <Button title="Signout" onPress={handleSignOut} />
        </>
    )
}