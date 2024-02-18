import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

export const TermsAndConditionsCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", marginLeft: -15 }}>
    
      <CheckBox
      style={{padding: 0, margin: 0}}
        checked={isChecked}
        onPress={handleCheckboxChange}
      />
      <Text style={{fontSize: 12}} >
        I agree to the terms and conditions.
      </Text>
    </View>
  );
};

