import React from 'react';
import {View, Text} from 'react-native';
import {useContext} from '../context';

const Teste = () => {

  const {
    teste
  } = useContext();



  return (
    <View>
      <Text>Componente {teste}</Text>
    </View>
  );
};

export default Teste;
