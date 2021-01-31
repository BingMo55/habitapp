import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground,Image} from 'react-native';
import { useFonts } from 'expo-font';
import {FlatList} from "react-native";
const backgroundImage = require('../assets/main_background.png');
const lifestyle_icon = require('../assets/lifestyle_icon.png');
const logo = require('../assets/splash.png');
import { Entypo } from '@expo/vector-icons'; 

// const backgroundImage = { uri: 'https://reactjs.org/logo-og.png' };
const DATA = [
    {title:"1. Go on a walk outside for at least 20 minutes per day."},
    {title:"2. For every meal, fill half your plate with fuits \n and veggies."},
    {title:"3. Go Swap your coffee for green tea or matcha."},
    {title:"4. Make an effort to eat three balanced meals a day."},
    {title:"5. For every hour that you sit, walk for two minutes."},
    {title:"6. Go on a walk outside for at least 20 minutes per day."},
    {title:"7. When you wake up, write down three things you \n are grateful for."}
]
export function InterestScreen() {
    return (
         
            <View style={styles.container}>
                <ImageBackground source={backgroundImage} style={styles.image}>

                    <View style={{alignContent:"center",flex:1,flexDirection:"row",justifyContent:"center"}}>
                        <Text style={styles.header_text}>Habit Selection</Text>
                    </View>
                   
            <View style={{flexDirection:"row"}}>
            <FlatList 
                data={DATA}
                renderItem={({ item }) => 
                    <Item title={item.title} />
                    }
                keyExtractor={(item) => item.id}
                height="100%"/>
            
             </View>     
                </ImageBackground>
            </View>
           
    );
  }


  function Item({ title}) {
    return (
      <View style={styles.item}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{alignself:'baseline'}}>
          <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity style={{ color: "yellow" }}>
          
          <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      
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
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 30,
        lineHeight: 41,
        textAlign: "center",
        paddingBottom: 50,
        color: "black",
        
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
    },
    item: {
        backgroundColor: "#F7F3F0",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "column",
        borderRadius: 20,
      },


});
