import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OnBoadingScreen from './src/screens/OnBoadingScreen';
import SignIn from './src/screens/SignIn';  // Import SignIn screen bhi karna hoga
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoadingScreen">
        <Stack.Screen name="OnBoadingScreen" component={OnBoadingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
