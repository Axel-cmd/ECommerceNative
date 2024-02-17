import { TextInput } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const PasswordInput = ({placeholder, setValue,value}: Props) => {
    return(
        <TextInput placeholder={placeholder} value={value} onChangeText={setValue} autoCapitalize='none' secureTextEntry/>
    )
}