import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface QuantityControlProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>; // Utilisation de React.Dispatch pour le type de setQuantity
}

export const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Utilisation de prevQuantity comme valeur précédente
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={decreaseQuantity}>
        <AntDesign name="minuscircleo" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 10, fontSize: 18 }}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQuantity}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

