import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default () => {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  return (
    <SafeAreaView style={style.App}>
      {/* <Text style={style.Text}>Primeiro Componente</Text>
      <Primeiro /> */}
      <TextInput
        onChangeText={setMin}
        keyboardType="numeric"
        placeholder="Número mínimo"
        value={min}
      />
      <TextInput
        onChangeText={setMax}
        keyboardType="numeric"
        placeholder="Número máximo"
        value={max}
      />

      {max > min && min != null && <Aleatorio min={min} max={max} />}

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
