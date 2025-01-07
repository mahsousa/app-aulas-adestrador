import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashPage from '@/pages/splashPage';
import InicialPage from '@/pages/inicialPage';
import LoginPage from '@/pages/loginPage';
import RegisterPage from '@/pages/registerPage';
import HomePage from '@/pages/homePage';

export type RootStackParamList = {
  Splash: undefined; 
  InicialPage: undefined; 
  Login: undefined; 
  Cadastro: undefined;
  Home: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
        
        <Stack.Screen 
          name="InicialPage" 
          component={InicialPage} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={RegisterPage} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default Router;