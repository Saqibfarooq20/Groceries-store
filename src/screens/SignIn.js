import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import BlueBtn from '../components/BlueBtn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import SignUp from './SignUp';

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  return (
    <>
      {/* StatusBar hidden */}
      <StatusBar hidden={true} translucent backgroundColor="transparent" />

      {/* Hide keyboard on outside tap */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
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
              <Text style={styles.heading}>Get your groceries</Text>
              <Text style={styles.heading}>with nectar</Text>
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

              {/* Account Text */}
              <View style={styles.accountRow}>
                <Text style={styles.normalText}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
              </View>

              {/* Social Buttons */}
              <View style={styles.btnWrapper}>
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

                <View style={{ height: 12 }} /> 
                {/* Small space between buttons */}

                <BlueBtn
                  name="Facebook"
                  color="#4A66AC"
                  icon={{
                    source: require('../assets/images/facebookImg.png'),
                    size: 18,
                    position: 'left',
                  }}
                  onPress={() => navigation.navigate('Verification')}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  textContainer: {
    width: '90%',
    marginTop: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
  },
  inputContainer: {
    width: '90%',
    marginTop: 30,
    alignItems: 'center',
  },
  phoneContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  normalText: {
    fontSize: 15,
    color: '#000',
  },
  signUpText: {
    fontSize: 15,
    color: '#53B175',
  },
  btnWrapper: {
    width: '100%',
  },
});

export default SignIn;
