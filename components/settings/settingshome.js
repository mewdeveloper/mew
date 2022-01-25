import React from 'react';
import { Text, View } from 'react-native';
import Selector from './languageselector';


export default function settings() {
  return (
    <View style={{ flex: 1}}>
       <Selector />
    </View>
  );
}
