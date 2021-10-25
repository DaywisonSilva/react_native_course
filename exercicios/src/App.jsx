import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai1 from './components/direta/Pai';
import Pai2 from './components/indireta/Pai';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';
import Pai3 from './components/relacao/Pai';
import Filho from './components/relacao/Filho';

export default () => {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [num, setNum] = useState(0);
  return (
    <SafeAreaView style={style.App}>
      <Pai3>
        <Filho nome="Ana" sobrenome="Silva" />
        <Filho nome="Julia" sobrenome="Silva" />
      </Pai3>
      {/* <ParImpar num={num} setNum={setNum} /> */}
      {/* <Diferenciar /> */}
      {/* <Contador inicial={0} passo={10} /> */}
      {/* <Pai1 /> */}
      {/* <Pai2 /> */}
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
