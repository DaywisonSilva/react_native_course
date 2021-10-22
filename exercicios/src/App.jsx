import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Botao from './components/Botao';
import Contador from './components/Contador';

export default () => {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  return (
    <SafeAreaView style={style.App}>
      <Contador inicial={0} passo={10} />
      {/* <Botao /> */}
      {/* <MinMax min={3} max={4} /> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Text: {
    fontSize: 28,
  },
});
