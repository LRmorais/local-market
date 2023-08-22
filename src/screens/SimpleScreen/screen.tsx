import React from 'react';
import {View, Text} from 'react-native';
import {useContext, IData} from './context';


const Screen = () => {
  const {teste}: IData = useContext();
  return (
    <View>
        <Text>{teste}</Text>
    </View>
  );
};


export default Screen;
