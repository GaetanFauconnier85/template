import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/authentification/welcome.screen';
import LoginScreen from '../screens/authentification/login.screen';
import SignUpScreen from '../screens/authentification/sign-up.screen';

const Stack = createNativeStackNavigator();

const SignOutStackUtils = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'WelcomeScreen'}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Connexion'}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{title: 'Créer un compte'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignOutStackUtils;
