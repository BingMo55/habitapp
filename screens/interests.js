import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground,Image} from 'react-native';
import { useFonts } from 'expo-font';
const backgroundImage = require('../assets/main_background.png');
const lifestyle_icon = require('../assets/lifestyle_icon.png');
const logo = require('../assets/splash.png');

// const backgroundImage = { uri: 'https://reactjs.org/logo-og.png' };

export function InterestScreen() {
    return (
         
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={styles.image}>
                    <View style={{alignContent:"center",flex:1,flexDirection:"row",justifyContent:"center"}}>
                        <Text style={styles.header_text}>Habit Selection</Text>
                    </View>
                    
                   
                </ImageBackground>
            </View>
    );
  }


const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column'
    },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    },

    backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'red'
    
    },
    header_text:{
        position: 'absolute',
        width: 287,
        height: 82,
        left: 80,
        top: 225,
        fontFamily: 'Alegreya-Black',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 30,
        lineHeight: 41,
        textAlign: "center",
        color: "white",
        
    },
    lifestyle_image:
    {
        backgroundColor: "white",
        borderRadius: 50,
    },
    interest_text:{
        color: 'white',
        paddingTop: 10,
        justifyContent: "center"
    }



});
