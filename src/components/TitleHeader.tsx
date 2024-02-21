import { StyleSheet, Text } from "react-native"

type Props = {
    label: string
}

export const TitleHeader = ({label}: Props) => {
    return(
        <Text style={style.heading}>{label}</Text>
    )
}

const style = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "300",
        fontFamily: "Barlow",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 50
    },
})