import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string,
    onPress: () => void,
    color?: string,
    backgroundColor?: string
}

export const FormButton = ({ color, backgroundColor, title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={{...styles.buttonContainer, backgroundColor}} >
            <Text style={{...styles.buttonText, color}} >{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 56,
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 8,
        marginTop: 10
    },
    buttonText: {
        width: "100%", 
        textAlign: "center",
        color: 'white'
    }
});
