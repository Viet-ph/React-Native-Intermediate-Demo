import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';
import AppButton from './components/Button';
import AppTextInput from './components/TextInput';
import * as SMS from 'expo-sms';

const SendSmsScreen = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (!isAvailable){
        Alert.alert('Error', "There's no SMS available on this device");
        return
    }
    try {
      const { result } = await SMS.sendSMSAsync([recipient], message);
      if (result === SMS.SMSStatus.SENT) {
        Alert.alert('Success', 'SMS sent successfully!');
      } else {
        Alert.alert('Error', 'Failed to send SMS.');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('Error', 'Failed to send SMS. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
        <Image
            source={require('./assets/images/kisspng-computer-icons-email-clip-art-e-mail-5acb3735682918.7939340615232673814267.png')}
            style={styles.posterImage}
        />
        <AppTextInput
            icon="account-arrow-left"
            placeholder="Recipient"
            value={recipient}
            onChangeText={setRecipient}
        />
        <AppTextInput
            placeholder="Message"
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
        />
        <AppButton title="Send SMS" onPress={handleSendSMS} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 15,

    },
    messageInput: {
      height: 100,
    },
    posterImage: {
        width: '80%',
        height: 200,
        marginBottom: 20,
        resizeMode: 'cover',
        borderRadius: 10,
    },
  });

export default SendSmsScreen;
