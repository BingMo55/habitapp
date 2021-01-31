import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Icon,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { camera } from "./camera";
const backgroundImage = require("../assets/main_background.png");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Running",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={{ color: "yellow" }}>
          <Text>share</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => camera}
          style={{ alignItems: "center", color: "yellow" }}
        >
          <AntDesign
            style={{ paddingTop: 5, borderRadius: 100 }}
            name="plus"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 100 }}>
          <Image
            style={styles.pics}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 100 }}>
          <Image
            style={styles.pics}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 100 }}>
          <Image
            style={styles.pics}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 100 }}>
          <Image
            style={styles.pics}
            source={{ uri: "https://source.unsplash.com/random" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function HabitList() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Text style={styles.hub}>Habit Hub</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          height="100%"
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#F7F3F0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "column",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
  },
  title2: {
    fontSize: 12,
    marginLeft: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  pics: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  hub: {
    alignContent: "center",
    fontSize: 50,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
