import React from 'react';
import {Button, Text, View} from 'react-native';
import Estilo from './estilo';

export default ({num = 0, setNum}) => {
  return (
    <View>
      <Text>O resultado é</Text>

      {num % 2 == 0 ? (
        <Text style={Estilo.fontG}>Par</Text>
      ) : (
        <Text style={Estilo.fontG}>Ímpar</Text>
      )}

      <Button title="Mudar" onPress={() => setNum(prevNum => prevNum + 1)} />
    </View>
  );
};
