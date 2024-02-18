import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
  type: 'text' | 'email' | 'password'; // Définir les types autorisés pour la propriété 'type'
}

const CustomInput: React.FC<CustomInputProps> = ({ type, placeholder, value, onChangeText, ...rest }) => {
  return (
    <TextInput
      style={{
        height: 40,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8 // Ajouter le rayon de bordure
      }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={type === 'password'} // Gère la sécurité du texte pour le champ de mot de passe
      keyboardType={type === 'email' ? 'email-address' : 'default'} // Définit le type de clavier pour l'e-mail
      {...rest} // Passer les autres props TextInput
    />
  );
};

export default CustomInput;
