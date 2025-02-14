import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ScrollViewProps } from 'react-native';
import { DrawerNavigationState, ParamListBase, RouteProp } from '@react-navigation/native';

interface CustomDrawerContentProps extends ScrollViewProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: any;
  descriptors: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const filteredRoutes = props.state.routes.filter(
    (route: RouteProp<ParamListBase, string>) => route && (route.name === 'Home' || route.name === 'lesson')
  );

  return (
    <DrawerContentScrollView {...props}>
      {filteredRoutes.map((route, index) => (
        <DrawerItem
          key={route.key}
          label={route.name === 'lesson' ? 'Aulas Personalizadas' : route.name === 'Home' ? 'Início' : route.name}
          onPress={() => props.navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;