import React from 'react';
import type {Node} from 'react';
import { NavigationContainer,DefaultTheme  } from '@react-navigation/native';


import './IMLocalize';
import BottomMenu from './components/shared/bottommenu'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#002d93',
    background :'#ffffff'
  },
  fonts:{
  }

};

const App: () => Node = () => {

  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.container}>
     <NavigationContainer  theme={MyTheme}>
         <BottomMenu/>
       </NavigationContainer>
    </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
