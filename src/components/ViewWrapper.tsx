import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type Props = {
    children: React.JSX.Element
};

export const ViewWrapper = ({children}: Props) => {
    return (
        <View style={style.wrapper}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        padding: 20,
        width: "100%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})