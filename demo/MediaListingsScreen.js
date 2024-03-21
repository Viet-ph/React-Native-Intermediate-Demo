import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "./components/Card";
import Screen from "./components/Screen";
import colors from "./config/colors";
import routes from "./routes";


function MediaListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <Card
                title="Audio"
                subTitle="Start playing audios"
                image = {require("./assets/images/mp3.png")}
                onPress={() => navigation.navigate(routes.AUDIO_DETAILS)}
            />
            <Card
                title="Video"
                subTitle="Start playing videos"
                image={require("./assets/images/video-camera.png")}
                onPress={() => navigation.navigate(routes.VIDEO_DETAILS)}
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
  
  export default MediaListingsScreen;