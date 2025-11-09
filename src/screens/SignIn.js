import { Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import PhoneInput from 'react-native-phone-number-input';

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      {/* Status bar hidden and overlapped */}
      <StatusBar
        hidden={true}
        translucent={true}
        backgroundColor="transparent"
      />

      {/* Top image */}
      <Image
        source={require('../assets/images/signInImg.png')}
        style={styles.image}
      />

      {/* Text headings */}
      <View style={styles.textContainer}>
        <Text style={[styles.text, { marginTop: 20 }]}>Get your groceries</Text>
        <Text style={styles.text}>with nectar</Text>
      </View>

      {/* Phone input with flag and country code */}
      <View style={styles.inputContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN" // default country code
          layout="first"   // flag on left
          onChangeFormattedText={text => {
            setPhoneNumber(text); // full number including country code
          }}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          textInputStyle={{ fontSize: 16 }}
          placeholder="Enter your mobile number"
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 29,
    fontWeight: '500', // 'medium' is not valid, use '500'
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 5,
    color: '#000000',
  },
  inputContainer: {
    flex: 3,
//backgroundColor: '#bbb5b5ff',
  },
  phoneContainer: {
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignSelf: 'center',
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

export default SignIn;
