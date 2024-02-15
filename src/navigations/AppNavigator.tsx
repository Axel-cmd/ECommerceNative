import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { BottomNavigator } from "./BottomNavigator";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="BottomNav" screenOptions={{headerShown: false}} >
            <Stack.Screen name="BottomNav" component={BottomNavigator} />
        </Stack.Navigator>
    )
}