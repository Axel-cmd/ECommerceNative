import { NavigationContainer } from "@react-navigation/native"
import { useState } from "react"
import { AppNavigator } from "./AppNavigator"
import { AuthNavigator } from "./AuthNavigator"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/slices"


export const AppRoute = () => {
    const isLoggedIn = useSelector( selectIsLoggedIn )

    return(
        <NavigationContainer>
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}