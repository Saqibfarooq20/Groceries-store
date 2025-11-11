import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Btn from '../components/Btn';
  


const OnBoadingScreen = ({ navigation }) => {

useEffect(() => {
  setTimeout(() => {
    SystemNavigationBar.navigationHide();
  }, 1000); // Thoda delay rakhna ho toh ms me specify karein
}, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <StatusBar hidden={true} />     
      <Image source={require('../assets/images/onBoadingImg.png')} />
      <Image source={require('../assets/images/Group.png')} style={styles.caretImg} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.greetingText}>to our store</Text>
      <Text style={styles.additionalText}>Get your groceries in as fast as one hour</Text>
      
<Btn name={"Get Started"} onPress={() => {console.warn('Pressed'); navigation.navigate('SignIn')}} />
    </View>
  );
};

const styles = StyleSheet.create({
  caretImg: {
    position: 'absolute',
    top: 485,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    position: 'absolute',
    top: 550,
    color: '#ffffff',
  },
  greetingText: {
    marginTop: 5,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 40,
    position: 'absolute',
    top: 580,
    color: '#ffffff',
  },
  additionalText: {
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 60,
    position: 'absolute',
    top: 640,
    color: '#FCFCFC',
  },
});

export default OnBoadingScreen;
