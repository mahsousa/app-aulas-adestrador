import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Importação das páginas
import SplashPage from "@/pages/splashPage";
import InicialPage from "@/pages/inicialPage";
import LoginPage from "@/pages/loginPage";
import RegisterPage from "@/pages/registerPage";
import HomePage from "@/pages/homePage";
import LeassonPage from "@/pages/leassonPage";
import PetPage from "@/pages/petPage";
import SearchPage from "@/pages/searchPage";
import UserPage from "@/pages/userPage";

// Definição dos tipos de parâmetros para as rotas do Stack
export type RootStackParamList = {
  Splash: undefined;
  InicialPage: undefined;
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  Tabs: undefined; // Adicionando a navegação para as Tabs
};

// Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Tab Navigator
const Tab = createBottomTabNavigator();

// Tabs Navigation
function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="LeassonPage"
        component={LeassonPage}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <FontAwesome5 name="play-circle" size={18} color="gray" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PetPage"
        component={PetPage}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <FontAwesome5 name="bone" size={16} color="gray" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <FontAwesome5 name="search" size={18} color="gray" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserPage"
        component={UserPage}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <FontAwesome name="user" size={18} color="gray" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigation
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InicialPage"
          component={InicialPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={RegisterPage} />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    marginTop: 12,
  },
});

export default Router;
