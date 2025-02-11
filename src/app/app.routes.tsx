import { RouteProp } from "@react-navigation/native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import HomePage from "src/pages/homePage";
import LeassonPage from "src/pages/leassonPage";
import { SplashPage } from "src/pages/splashPage";
import LoginPage from "src/pages/loginPage";
import SignIn from "src/pages/signIn";
import SignUp from "src/pages/signUp";
import CustomDrawerContent from "src/customDrawer/CustomDrawerContent";
import VideoPage from "src/pages/videoPage";

type StackRoutesParams = {
  home: undefined;
  splash: undefined;
  loginPage: undefined;
  signIn: undefined;
  signUp: undefined;
  lesson: undefined;
  videopage: undefined;
};

export type StackNavigatorRoutesProps =
  NativeStackNavigationProp<StackRoutesParams>;

const Stack = createNativeStackNavigator<StackRoutesParams>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={HomePage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity>
              <MaterialIcons name="menu" size={25} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen name="loginPage" component={LoginPage} />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ title: "Entrar" }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{ title: "Registrar-se" }}
      />
      <Stack.Screen
        name="lesson"
        component={LeassonPage}
        options={{ title: "Aula" }}
      />
      <Stack.Screen
        name="videopage"
        component={VideoPage}
        options={{ title: "Aula" }}
      />
    </Stack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
    initialRouteName="stack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          justifyContent: "center",
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="Lesson"
        component={LeassonPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="play-circle" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={LeassonPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="stack"
        component={StackRoutes}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#F75D08",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="home" color={"#fff"} size={22} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Star"
        component={LeassonPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="star" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={LeassonPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="splash"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route, navigation, theme }) => ({
        headerShown: !["splash", "signIn", "signUp", "LoginPage"].includes(
          route.name
        ),
        drawerLockMode: ["splash", "signIn", "signUp", "LoginPage"].includes(
          route.name
        )
          ? "locked-closed"
          : "unlocked",
      })}
    >
      <Drawer.Screen name="Home" component={TabRoutes} />
      <Drawer.Screen name="lesson" component={LeassonPage} />
      <Drawer.Screen name="splash" component={SplashPage} />
      <Drawer.Screen name="LoginPage" component={LoginPage} />
      <Drawer.Screen name="signIn" component={SignIn} />
      <Drawer.Screen name="signUp" component={SignUp} />
      <Drawer.Screen name="videopage" component={VideoPage} />
    </Drawer.Navigator>
  );
}

export { DrawerRoutes as AppRoutes, TabRoutes };
