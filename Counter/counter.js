import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../Redux/store';



function Counter({state}) {


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 10 }}
        onPress={() => {
         store.dispatch({type:'INCREMENT'})
        
        }}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, margin: 10 }}>{state}</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 10 }}
        onPress={() => {
            store.dispatch({type:'DECREMENT'})
     
        }}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>-</Text>
      </TouchableOpacity>
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

const mapStateToPop =(state)=>{
    return {state}
}


export default connect(mapStateToPop, null)(Counter)