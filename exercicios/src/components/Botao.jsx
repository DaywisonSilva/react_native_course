import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default () => {
  const executar3 = () => console.warn('executar 3');

  return (
    <>
      <View style={style.View}>
        <Button title="Executar #01" onPress={() => console.warn('executar')} />
      </View>
      <View style={style.View}>
        <Button
          title="Executar #02"
          onPress={function () {
            console.warn('executar 2');
          }}
          color="#841584"
        />
      </View>
      <View style={style.View} onTouchStart={() => console.warn('start')}>
        <Button
          title="Executar #03"
          onPress={executar3}
          color="#11ff99"
          style={style.btn}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 300,
    height: 80,
  },
});
