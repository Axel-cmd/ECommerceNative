import { NavigationContainer } from "@react-navigation/native"
import { useState } from "react"
import { AppNavigator } from "./AppNavigator"
import { AuthNavigator } from "./AuthNavigator"


export const AppRoute = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <NavigationContainer>
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}