import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useRef } from "react";

import Card from "./components/Card";
import Screen from "./components/Screen";
import colors from "./config/colors";
import routes from "./routes";

// import CaptureScreen
import { captureRef, captureScreen  } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

function CameraListingsScreen({ navigation }) {
    const imageRef = useRef();

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 440,
                quality: 1,
            });
    
            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert("Saved!");
            }
        } catch (e) {
            console.log(e);
        }
      };

    const fullScreenCaptureAsync = async () => { 
        try{
            const localUri = await captureScreen({
                format: "jpg",
                quality: 0.8
            })
            await MediaLibrary.saveToLibraryAsync(localUri);
              if (localUri) {
                alert("Saved!");
            }
        } catch (e) {
          console.log(e);
        }
    }

    return (
        <Screen style={styles.screen} imgRef={imageRef}>
            <Card
                title="Camera"
                subTitle="Start using camera"
                image = {require("./assets/images/pngwing.com.png")}
                onPress={() => navigation.navigate(routes.EXPO_CAMERA)}
            />
            <Card
                title="Screenshot"
                subTitle="Capture this view"
                image={require("./assets/images/icons8-screenshot-100.png")}
                onPress={onSaveImageAsync}
            />
            <Card
                title="Screenshot"
                subTitle="Capture full screen"
                image={require("./assets/images/icons8-screenshot-100.png")}
                onPress={fullScreenCaptureAsync}
            />
        </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      padding: 20,
      backgroundColor: colors.light,
    },
  });
  
  export default CameraListingsScreen;