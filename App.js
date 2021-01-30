import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import logo from './assets/icon.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>hi bing do you see this?🍆</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source = {logo} style={styles.logo} />
      <Text style={styles.instructions}>
        Open up App.js to start working on your app! NICK IS AWESOME
        </Text>
      <StatusBar style="auto" />
      <TouchableOpacity 
      onPress={() => alert('Hello, world! -nick was here.')}
      style={styles.button}>
      <Text style={styles.buttonText}>pick a photo</Text>
      </TouchableOpacity>
      <Button
        title="========THIS IS A LINK TO ANOTHER PAGE======="
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'top bar title bing is amazing' }} component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
