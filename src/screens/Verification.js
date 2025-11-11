import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Verification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onChange = (t) => {
    const onlyDigits = t.replace(/[^0-9]/g, '');
    const next = onlyDigits.slice(0, 4);
    setOtp(next);
    setSelection({ start: next.length, end: next.length });
  };

  const handleBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate('Home');
  };

  return (

     <KeyboardAwareScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled" // important
              enableOnAndroid
              extraScrollHeight={24}
              extraHeight={120}
            >

    <View style={styles.parentView}>
      {/* Background */}
      <Image
        source={require('../assets/images/RectangleBg.png')}
        style={styles.bg}
       
      />

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={handleBack}>
        <Image source={require('../assets/images/arrow.png')} style={{ width: 10, height: 20 }} />
      </TouchableOpacity>

      <Text style={styles.heading}>Enter your 4-digit code</Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        <TextInput
          value={otp}
          onChangeText={onChange}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          maxLength={4}
          placeholder="- - - -"
          placeholderTextColor="#B3B3B3"
          selection={selection}
          onSelectionChange={(e) => setSelection(e.nativeEvent.selection)}
          textAlign="center"
          style={[styles.input, otp.length === 4 && styles.inputDone]}
        />
      </View>

      {/* Resend Code - only visible when keyboard hidden */}
      {!isKeyboardVisible && (
        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      )}

      {/* FAB - moves up when keyboard is visible */}
      {/* <FAB
        icon="arrow-right"
        style={[styles.fab, isKeyboardVisible && styles.fabKeyboardVisible]}
        color="#fff"
        onPress={() => {
          if (otp.length === 4) {
              console.warn('Verify OTP:', otp);
            
            }
        }}
      /> */}


      <TouchableOpacity style={styles.ant}>
               <AntDesign name="right" color="#ffffff" size={24} />

      </TouchableOpacity>
    </View>
</KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    position: 'absolute',
   
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    elevation: 10,
  },
  heading: {
    marginTop: 100,
    marginLeft: 20,
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 40,
  },
  otpContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 56,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E5E5E5',
    fontSize: 24,
    letterSpacing: 16,
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  inputDone: {
    borderBottomColor: '#53B175',
    color: '#53B175',
  },
  resendContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#53B175',
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 42,
    backgroundColor: '#53B175',
    zIndex: 10,
    borderRadius: 30,
    elevation: 6,
  },
  ant : {
    position: 'absolute',
    right: 24,
    bottom: 42,
    width:60,
    elevation:3,
    height:60,
    backgroundColor: '#53B175',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Verification;
