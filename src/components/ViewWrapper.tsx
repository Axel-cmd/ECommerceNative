import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type Props = {
    children: React.JSX.Element[] | React.JSX.Element | any
};

export const ViewWrapper = ({children}: Props) => {
    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={style.scroll}
        >
            {children}

        </ScrollView>
    )
}

const style = StyleSheet.create({
    scroll: {
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    }
})