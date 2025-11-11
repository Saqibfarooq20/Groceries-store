import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import BlueBtn from '../components/BlueBtn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");
  


  return (
    <>
      {/* StatusBar hidden */}
      <StatusBar hidden={true} translucent backgroundColor="transparent" />

      {/* TouchableWithoutFeedback to dismiss keyboard */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled" // important
          enableOnAndroid
          extraScrollHeight={24}
          extraHeight={120}
        >
          <View style={styles.container}>
            {/* Top Image */}
            <Image
              source={require('../assets/images/signInImg.png')}
              style={styles.image}
            />

            {/* Headings */}
            <View style={styles.textContainer}>
              <Text style={[styles.text, { marginTop: 20 }]}>
                Get your groceries
              </Text>
              <Text style={styles.text}>with nectar</Text>
            </View>

            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeFormattedText={text => setPhoneNumber(text)}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                textInputStyle={{ fontSize: 16 }}
                placeholder="Enter your mobile number"
              />

              <Text style={styles.smallText}>Or connect with social media</Text>

              {/* Social Buttons */}
              <BlueBtn
                name="Google"
                color="#5383EC"
                icon={{
                  source: require('../assets/images/googleImg.png'),
                  size: 18,
                  position: 'left',
                }}
                onPress={() => console.warn('Google pressed')}
              />
              <BlueBtn
                name="Facebook"
                color="#4A66AC"
                icon={{
                  source: require('../assets/images/facebookImg.png'),
                  size: 18,
                  position: 'left',
                }}
                onPress={() => { console.warn('facebook pressed'); navigation.navigate('Verification'); }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 29,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 5,
    color: '#000000',
  },
  inputContainer: {
    flex: 3,
  },
  phoneContainer: {
    width: '90%',
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
  smallText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#828282',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    fontWeight: '300',
    marginTop: 20,
  },
});

export default SignIn;
