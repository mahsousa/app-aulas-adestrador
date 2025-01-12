import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import LeassonPage from "@/pages/leassonPage";
import PetPage from "@/pages/petPage";
import SearchPage from "@/pages/searchPage";
import UserPage from "@/pages/userPage";

const Tab = createBottomTabNavigator();

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


const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabRoutes;
