import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default ({a, b}) => {
  return (
    <>
      <Text style={Estilo.fontG}>{a}</Text>
      <Text style={Estilo.fontG}>{b}</Text>
    </>
  );
};
