import React from 'react';
import {Button} from 'react-native';
import Estilo from '../estilo';

export default ({min, max, funcao}) => {
  const gerarNumero = (funcMin, funcMax) => {
    const fator = funcMax - funcMin + 1;
    return parseInt(Math.random() * fator) + funcMin;
  };

  return (
    <>
      <Button
        title="Executar"
        onPress={() => {
          const n = gerarNumero(min, max);
          funcao(n);
        }}
      />
    </>
  );
};
