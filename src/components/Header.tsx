import { Image, StatusBar, StyleSheet, TouchableOpacity, View, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
    showCartIcon: boolean
}

export const Header = ({showCartIcon}: Props) => {

    const navigation = useNavigation();

    const cartIcon = (showCartIcon &&
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} >
            <Ionicons name="cart-outline" size={20} />    
        </TouchableOpacity>
    )
    return(
        <SafeAreaView style={style.safeArea}>
            <View style={style.header} >
                <View style={style.container} ></View>
                <Image style={style.imgLogo} source={require("assets/logo-dark.png")} />
                <View style={style.container} >{cartIcon}</View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff', // Vous pouvez modifier la couleur de fond selon votre design
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3, // Cette propriété est pour Android
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 10 + (StatusBar.currentHeight ?? 0),
        paddingBottom: 10,
        zIndex: 1000
    },
    container: {
        width: 20
    },
    imgLogo: {
        width: 100, 
        height: 50
    }
})
