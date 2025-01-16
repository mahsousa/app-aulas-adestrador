import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import LoginPage from "src/pages/loginPage";
import RegisterPage from "src/pages/registerPage";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

// suggest the routes on navigate method
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={LoginPage} />
      <Screen name="signUp" component={RegisterPage} />
    </Navigator>
  );
}
