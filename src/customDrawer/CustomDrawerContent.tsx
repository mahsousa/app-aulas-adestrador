import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { ScrollViewProps } from "react-native";
import { DrawerNavigationState, ParamListBase, RouteProp } from "@react-navigation/native";

interface CustomDrawerContentProps extends ScrollViewProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: any;
  descriptors: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const filteredRoutes = props.state.routes.filter(
    (route: RouteProp<ParamListBase, string>) =>
      route && (route.name === "home" || route.name === "lesson")
  );

  const navigateToTab = (routeName: string) => {
    if (routeName === "home") {
      props.navigation.navigate("Tabs", { screen: "home" });
    } else if (routeName === "lesson") {
      props.navigation.navigate("Tabs", { screen: "lesson" });
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {filteredRoutes.map((route, index) => (
        <DrawerItem
          key={route.key}
          label={
            route.name === "home" ? "Inicio" : route.name === "lesson" ? "Aulas Personalizadas" : ""}
          onPress={() => navigateToTab(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
