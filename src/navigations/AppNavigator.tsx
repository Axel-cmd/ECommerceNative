import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { BottomNavigator } from "./BottomNavigator";
import { Header } from "components/Header";
import { CartScreen } from "screens/CartScreen";
import { ProductScreen } from "screens/productScreen";
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="BottomNav" screenOptions={{header: () => (<Header showCartIcon={true} />)}} >
            <Stack.Screen name="BottomNav" component={BottomNavigator} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="ProductDetail" component={ProductScreen} />
        </Stack.Navigator>
    )
}