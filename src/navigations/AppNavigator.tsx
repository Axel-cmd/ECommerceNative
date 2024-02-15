import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { BottomNavigator } from "./BottomNavigator";
import { Header } from "components/Header";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="BottomNav" screenOptions={{header: () => (<Header showCartIcon={true} />)}} >
            <Stack.Screen name="BottomNav" component={BottomNavigator} />
        </Stack.Navigator>
    )
}