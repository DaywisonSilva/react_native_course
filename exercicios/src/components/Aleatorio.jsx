import React from 'react';
import {Text} from 'react-native';

export default ({min, max}) => {
  let numberBetweenMinMax = Math.random() * (max - min) + min;

  return (
    <Text>
      O número entre os valores fornecidos é: {Math.ceil(numberBetweenMinMax)}
    </Text>
  );
};
