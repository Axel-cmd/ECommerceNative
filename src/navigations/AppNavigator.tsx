import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "screens/index";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}