import { TextInput } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const PasswordInput = ({placeholder, setValue,value}: Props) => {
    return(
        <TextInput       
        style={{
            height: 48,
            borderColor: '#E8E8E8',
            borderWidth: 2,
            paddingHorizontal: 10,
            borderRadius: 8,
            marginBottom: 10,
            color: "#000"
          }}
          placeholder={placeholder} value={value} onChangeText={setValue} autoCapitalize='none' secureTextEntry/>
    )
}