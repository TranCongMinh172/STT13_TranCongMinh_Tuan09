import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DECREMENT, INCREMENT } from './Redux/action';
import { store } from './Redux/store';
import Counterr from './Counter/counter'
import { Provider } from 'react-redux';








export default function App() {

  return (
    <View style={styles.container}>
     <Provider store={store} >
       <Counterr></Counterr>
     </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
