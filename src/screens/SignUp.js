import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Btn from '../components/Btn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';  

const SignUp = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAwareScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              enableOnAndroid
              extraScrollHeight={24}
              extraHeight={120}
            >
    <View style={styles.parentView}>
      <Image source={require('../assets/images/RectangleBg.png')} />
      <Image source={require('../assets/images/redCaret.png')} style={styles.caretImg} />

      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subHeading}>Enter your credentials to continue</Text>

      <TextInput
        placeholder="User Name"
        style={styles.inputContainer}
        value={userName}
        onChangeText={setUserName}
      />

      <View style={styles.emailContainer}>
        <TextInput
          placeholder="Email address"
          style={styles.emailInput}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setValidEmail(validateEmail(text));
          }}
        />
        {validEmail && (
          <Icon name="check-circle" size={22} color="green" style={{ marginLeft: 8 }} />
        )}
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={22} color="#7C7C7C" />
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/images/bottomBg.png')} />

      <View style={styles.termsContainer}>
        <Text style={{ fontSize: 10 }}>By continuing you agree to our </Text>
        <TouchableOpacity onPress={() => console.warn('pressed terms')}>
          <Text style={styles.greenText}>Terms of Service</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10 }}> and </Text>
        <TouchableOpacity onPress={() => console.warn('pressed policy')}>
          <Text style={styles.greenText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <View style={{ position: 'absolute', bottom: 50, width: '100%', alignItems: 'center' }}>
        <Btn name={'Sign Up'} onPress={() => console.warn('Sign Up pressed')} />
        <Text style={styles.normalText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => console.warn('Go to Sign In')}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  caretImg: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 40,
  },
  subHeading: {
    fontSize: 10,
    color: '#7C7C7C',
    fontWeight: '300',
    marginStart: 20,
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1.5,
    marginTop: 40,
    marginHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1.5,
    marginTop: 40,
    marginHorizontal: 20,
  },
  emailInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1.5,
    marginTop: 40,
    marginHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 250,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  greenText: {
    color: 'green',
    fontSize: 10,
  },
  normalText: {
    color: '#7C7C7C',
    fontSize: 12,
    marginTop: 8,
  },
  signUpText: {
    color: 'green',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default SignUp;
