import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import logo from './assets/icon.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image source = {logo} style={styles.logo} />
      <Text style={styles.instructions}>
        Open up App.js to start working on your app! lol
        </Text>
      <StatusBar style="auto" />
      <TouchableOpacity 
      onPress={() => alert('Hello, world! -nick was here.')}
      style={styles.button}>
      <Text style={styles.buttonText}>pick a photo</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },
  logo:{
    width: 305,
    height: 189,
    marginBottom:10,
  },
  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button:{
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }

});
