import { Button } from "react-native"

type Props = {
    title: string,
    onPress: () => void,
    color?: string
}

export const FormButton = ({color, title, onPress}: Props) => {
    return(
        <Button title={title} onPress={onPress} color={color} />
    )
}