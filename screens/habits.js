import React, { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons'; 
import {
  Platform,
    FlatList,
    ImageBackground,
    SafeAreaView,
    Constants,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";
const cameraLogo = require('../assets/camera.png');
const backgroundImage = require('../assets/main_background.png');
const CameraModule = (props) => {
   const [cameraRef, setCameraRef] = useState(null);
   const [type, setType] = useState(Camera.Constants.Type.back);
   
return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        props.setModalVisible();
      }}
    >
      <Camera
        style={{ flex: 1 }}
        ratio="16:9"
        flashMode={Camera.Constants.FlashMode.off}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              icon="close"
              style={{ marginLeft: 12 }}
              mode="outlined"
              color="white"
              onPress={() => {
              props.setModalVisible();
              }}
            >
              Close
            </Button>
           <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                  props.setImage(photo);
                  props.setModalVisible();
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
       <Button
              icon="axis-z-rotate-clockwise"
              style={{ marginRight: 12 }}
              mode="outlined"
              color="white"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
           {type === Camera.Constants.Type.back ? "Front" : "Back "}
            </Button>
          </View>
        </View>
      </Camera>
    </Modal>
  );
};

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  if (Platform.OS.toLowerCase() === "web") {
    setHasPermission(true);
  } 
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
      <View>
        <TouchableOpacity  style={{paddingLeft:175,paddingTop:100}} onPress={() => {
          setShowCamera(true);
        }}>
           
    {camera && (
        <CameraModule
          showModal={camera}
          setModalVisible={() => setShowCamera(false)}
          setImage={(result) => setImage(result.uri)}
        />
      )}
          <Image source = {cameraLogo} style={{width:100, height:100}}></Image>
        </TouchableOpacity>

   </View>
    
        <View style= {{flexDirection :"row", justifyContent:"center"}}>
        <Text style={styles.hub}>Habit Hub</Text>
        </View>
        
        <FlatList
          data={DATA}
          renderItem={({ item }) => 
              <Item title={item.title} />
            }
          keyExtractor={(item) => item.id}
          height="100%"
        />

        <View
        style={{
          backgroundColor: "#eeee",
          width: 120,
          height: 120,
          borderRadius: 100,
          marginBottom: 8,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 120, height: 120, borderRadius: 100 }}
        />
      </View>

      
      
    </ImageBackground>
    </View>
  );
}


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Running",
    uris:[
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/morning-selfie-cape-town-south-africa-royalty-free-image-686291386-1563312327.jpg",
    ]
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Reading",
    uris:[
        "https://writewelldaily.files.wordpress.com/2014/01/img_3834.jpg"
    ]
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Coding",
    uris: ["https://pbs.twimg.com/media/C6YjftmXMAAniUS.jpg"
    ]
  },
];



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
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={{ color: "yellow" }}>
          <Text>share</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          
        <TouchableOpacity
      
          style={{ alignItems: "center", color: "yellow" }}
        >
          <AntDesign
            style={{ paddingTop: 5, borderRadius: 100 }}
            name="plus"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 100}}>
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
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
    paddingTop: 50

  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
