import React from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import HomePage from "src/pages/homePage";
import LeassonPage from "src/pages/leassonPage";
import { SplashPage } from "src/pages/splashPage";
import InicialPage from "src/pages/inicialPage";


type StackRoutesParams = {
  home: undefined;
  details: undefined;
  splash: undefined;
  inicialPage: undefined;
};

// import to get suggestion of the stack routes on navigate method
export type StackNavigatorRoutesProps =
  NativeStackNavigationProp<StackRoutesParams>;

// create the stack routes with the params of the routes
const Stack = createNativeStackNavigator<StackRoutesParams>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// the stack routes is called in the tab routes
function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomePage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity 
            // onPress={() => navigation.toggleDrawer()}
            >
              <MaterialIcons name="menu" size={25} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen name="details" component={LeassonPage} />
      <Stack.Screen name="inicialPage" component={InicialPage} />
    </Stack.Navigator>
  );
}

// the tab routes is called in the drawer routes
function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="stack"
        component={StackRoutes}
        options={{
          tabBarLabel: "home", // renaming the tab label
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="home 2"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
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
      screenOptions={{ headerTitle: "" }}
    >
      <Drawer.Screen name="Home" component={TabRoutes} />
      <Drawer.Screen name="Lesson" component={LeassonPage} />
      <Drawer.Screen name="splash" component={SplashPage} />
      
    </Drawer.Navigator>
  );
}

export { DrawerRoutes as AppRoutes, TabRoutes };
