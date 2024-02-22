import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
    containerStyle?: ViewStyle,
    children: React.JSX.Element[] | React.JSX.Element | any
};

export const ViewWrapper = ({children, containerStyle}: Props) => {
    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={[style.scroll, containerStyle]}
        >
            {children}

        </ScrollView>
    )
}

const style = StyleSheet.create({
    scroll: {
        padding: 20,
        flexGrow: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    }
})