import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Dimensions} from 'react-native';
import CustomDrawerContent from '../components/CustomizedDrawer';
import MainNavigation from './MainNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{width: Dimensions.get('window').width - 120}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={MainNavigation}
        options={{drawerLabel: 'Home'}}
      />

      {/** */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
