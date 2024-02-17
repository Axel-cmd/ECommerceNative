import { StyleSheet, TextInput } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const CustomTextInput = ({placeholder, value, setValue}: Props) => {
    return(
        <TextInput placeholder={placeholder} value={value} onChangeText={setValue} autoCapitalize="none" />
    )
} 

const style = StyleSheet.create({
    input: {

    }
})