import { StyleSheet, TextInput } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}

export const CustomTextInput = ({placeholder, value, setValue}: Props) => {
    return(
        <TextInput
        style={{
            height: 48,
            borderColor: '#E8E8E8',
            borderWidth: 2,
            paddingHorizontal: 10,
            borderRadius: 8,
            marginBottom: 10,
          }}
          
          placeholder={placeholder} value={value} onChangeText={setValue} autoCapitalize="none" />
    )
} 

const style = StyleSheet.create({
    input: {

    }
})