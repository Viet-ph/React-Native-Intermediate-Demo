import React from 'react';
import {Alert, StyleSheet, Linking, Image } from 'react-native';
import Screen from './components/Screen';
import AppButton from './components/Button';
import AppTextInput from './components/TextInput';

function CallScreen () {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleCall = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }

    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <Screen style={styles.container}>
        <AppTextInput
            icon="phone-dial"
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
        />
        <AppButton title="Call" onPress={handleCall} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  posterImage: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 10,
},
});

export default CallScreen;
