import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import logo from "./assets/logo.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InterestScreen } from "./screens/interests";
import ImagePickerExample, { Habits } from "./screens/habits";
import { HabitGroupRoom } from "./screens/HabitGroupRoom";
import {useEffect} from "react";
import * as firebase from 'firebase';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>hi bing do you see this?🍆</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        Open up App.js to start working on your app! NICK IS AWESOME
      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => alert("Hello, world! -nick was here.")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>pick a photo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
          // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDXSXbJfLVjbPMlSbNj4Mm7u5LmVoLZ0vk",
      authDomain: "habitgoals-5ee7d.firebaseapp.com",
      databaseURL: "https://habitgoals-5ee7d-default-rtdb.firebaseio.com",
      storageBucket: "habitgoals-5ee7d.appspot.com",
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
   }else {
      firebase.app(); // if already initialized, use that one
   }
  }, []);

  
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Habits">
  //       <Stack.Screen
  //         name="Home"
  //         options={{ title: "top bar title bing is amazing" }}
  //         component={HomeScreen}
  //       />
  //       <Stack.Screen name="Details" component={DetailsScreen} />
  //       <Stack.Screen
  //         name="Interests"
  //         component={InterestScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Habits"
  //         component={ImagePickerExample}
  //         options={{ headerShown: false }}
  //       />
    

  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   // <AppContainer/>
  // );

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="selecStack"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="habitStack"
          component={habitsStack}
          options={{
            tabBarLabel: 'Selection',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="selectStack"
          component={selectStack}
          options={{
            tabBarLabel: 'Habits',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="HabitGroupRoom"
          component={HabitGroupRoom}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chat"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function habitsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Habits">
      <Stack.Screen
        name="Habits"
        component={ImagePickerExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function selectStack() {
  return (
    <Stack.Navigator
      initialRouteName="Select">
      <Stack.Screen
        name="Select"
        component={InterestScreen}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 189,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

