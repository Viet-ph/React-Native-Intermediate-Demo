import * as React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function VideoScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const videos = [
    { id: 1, name: "file_example_MP4_1280_10MG.mp4",  uri: require('./assets/video/file_example_MP4_1280_10MG.mp4') },
    { id: 2, name: 'SampleVideo_1280x720_10mb.mp4', uri: require('./assets/video/SampleVideo_1280x720_10mb.mp4') }
  ];

  // Function to render each item in the playlist
  function renderItem({ item }){
    return(
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={item.uri}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
  )}

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
