import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const TermsAndConditionsCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckboxChange}
      />
      <Text style={{ marginLeft: 10 }}>
        I agree to the terms and conditions.
      </Text>
    </View>
  );
};

export default TermsAndConditionsCheckbox;
