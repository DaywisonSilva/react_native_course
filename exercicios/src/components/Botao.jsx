import React from 'react';
import {Button} from 'react-native';

export default () => {
  return <Button title="Executar" onPress={() => console.warn('executar')} />;
};
