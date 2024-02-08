import { Button, Text } from "react-native"
import { useDispatch } from "react-redux"
import { setSignOut } from "redux/slices"

export const HomeScreen = () => {

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(setSignOut())
    }

    return(
        <>
            <Text>Home</Text>
            <Button title="Signout" onPress={handleSignOut} />
        </>
    )
}