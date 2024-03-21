import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import Icon from './components/Icon';

export default function ExpoCameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  
  async function handleRecordButtonPress(){
    if (isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
      await MediaLibrary.saveToLibraryAsync(videoUri);
    } else {
      const { uri } = await cameraRef.current.recordAsync();
      setVideoUri(uri);
      setIsRecording(true);
    }
  };

  async function handleCapturePhoto () {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      await MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  };

  console.log(permission)
  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleRecordButtonPress}>
                    <Icon name="record-rec" size={60}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Icon name="camera-flip" size={60}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCapturePhoto}>
                    <Icon name="camera-iris" size={60}/>
                </TouchableOpacity>
            </View>
        </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    alignItems: "flex-end",
  },
  button: {
    margin: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

