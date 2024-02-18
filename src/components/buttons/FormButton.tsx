import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type Props = {
    title: string,
    onPress: () => void,
    color?: string
}

export const FormButton = ({ color, title, onPress }: Props) => {
    return (
        <View style={styles.buttonContainer}>
            <Button title={title} onPress={onPress} color="white" />
        </View>
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
    }
});
