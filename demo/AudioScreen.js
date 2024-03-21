import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import Screen from './components/Screen';

const mp3Files = [
  { id: 1, name: 'file_example_MP3_1MG.mp3', file: require('./assets/audio/file_example_MP3_1MG.mp3') },
  { id: 2, name: 'sample-9s.mp3', file: require('./assets/audio/sample-9s.mp3') },
  { id: 3, name: 'sample-12s.mp3', file: require('./assets/audio/sample-12s.mp3') },
  { id: 4, name: 'sample-15s.mp3', file: require('./assets/audio/sample-15s.mp3') }
];

function AudioScreen() {
  const [sound, setSound] = useState();
  const [currentSound, setCurrentSound] = useState(null);

  async function playSound(file) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(file);
    setSound(sound);
    setCurrentSound(file);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() {
    if (sound) {
        await sound.stopAsync();
        setSound(null);
        setCurrentSound(null);
    }
  };

  // Function to handle the press event on a playlist item
  async function handlePress (file){
      if (sound) {
          await stopSound();
          return
      }
      playSound(file);
  };

  // Function to render each item in the playlist
  function renderItem({ item }){
    return(
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <TouchableOpacity
            onPress={() => {
                if (currentSound === item.file) {
                    stopSound();
                } else {
                    handlePress(item.file);
                }
            }}
            style={styles.button}
        >
            {currentSound === item.file ? ( // Conditional rendering based on the current sound
                <FontAwesome name="stop" size={24} color="#FFF" /> // Stop icon
            ) : (
                <FontAwesome name="play" size={24} color="#FFF" /> // Play icon
            )}
        </TouchableOpacity>
    </View>
  )}

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Screen style={styles.container}>
      <FlatList
        data={mp3Files}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  itemText: {
      fontSize: 16
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10
  },
  buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold'
  }
});

export default AudioScreen
