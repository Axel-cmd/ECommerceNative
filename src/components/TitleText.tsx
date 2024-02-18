import { StyleSheet, Text } from "react-native"

type Props = {
    label: string
}

export const TitleText = ({label}: Props) => {
    return(
        <Text style={style.label} >{label}</Text>
    )
}

const style = StyleSheet.create({
    label: {
        fontSize: 30,
    }
})