import React from "react";
import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import "../../styles/global.css";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="leassonPage"
        options={{
          title: "Leasson",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="play-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="petPage"
        options={{
          title: "Pet",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bone" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="searchPage"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="userPage"
        options={{
          title: "User",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}