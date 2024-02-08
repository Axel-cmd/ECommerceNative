import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { LoginScreen, RegisterScreen } from "screens/index";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}