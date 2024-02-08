import { Button, Text } from "react-native"
import { useDispatch } from "react-redux"

import { User } from "models/index";
import { setSignIn } from "redux/slices";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(setSignIn("Axel"))
    }

    return(
        <>
            <Text>Login</Text>
            <Button title="login" onPress={handleLogin} />
        </>
    )
}