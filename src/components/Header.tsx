import { Image, StatusBar, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";

type Props = {
    showCartIcon: boolean
}

export const Header = ({showCartIcon}: Props) => {

    const cartIcon = (showCartIcon &&
        <Ionicons name="cart-outline" size={20} />    
    )

    return(
        <View style={style.header} >
            <View style={style.container} ></View>
            <Image style={style.imgLogo} source={require("assets/logo-dark.png")} />
            <View style={style.container} >{cartIcon}</View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 10 + (StatusBar.currentHeight ?? 0),
        paddingBottom: 10,
    },
    container: {
        width: 20
    },
    imgLogo: {
        width: 100, 
        height: 50
    }
})