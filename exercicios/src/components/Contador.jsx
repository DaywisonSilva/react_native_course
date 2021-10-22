import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  const [numero, setNumero] = useState(inicial);

  const inc = () =>
    setNumero(prevNumero => {
      return prevNumero + passo;
    });
  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={Estilo.fontG}>{numero}</Text>
      <View style={Style.View}>
        <Button title="+" onPress={inc} />
        <Button title="-" onPress={dec} />
      </View>
    </>
  );
};

const Style = StyleSheet.create({
  View: {
    width: 150,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});
