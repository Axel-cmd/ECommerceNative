import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from "components/Header";

import { LoginScreen, RegisterScreen } from "screens/index";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{header: () => <Header showCartIcon={false} />}} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}