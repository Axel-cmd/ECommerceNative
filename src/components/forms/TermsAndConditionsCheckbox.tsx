import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Props = {
  value: boolean,
  setValue: React.Dispatch<React.SetStateAction<boolean>>
}

export const TermsAndConditionsCheckbox = ({ setValue, value }: Props) => {
  return (
    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", marginLeft: -15 }}>
    
      <CheckBox
      style={{padding: 0, margin: 0}}
        checked={value}
        onPress={() => setValue(!value)}
      />
      <Text style={{fontSize: 12}} >
        I agree to the terms and conditions.
      </Text>
    </View>
  );
};

