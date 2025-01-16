import { StatusBar } from "react-native";
import "react-native-gesture-handler";

import React from "react";
import Routes from "src/app";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
      <Routes />
    </View>
  );
}
