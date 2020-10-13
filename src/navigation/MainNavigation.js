import React from 'react';

// Imports: Screens
import HomeScreen from '../screens/HomeScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {Button, Icon, Text} from 'native-base';
import {useIsDrawerOpen} from '@react-navigation/drawer';

// ...

const Stack = createStackNavigator();

function MainNavigation(props) {
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: 'Stamp',
      }}>
      <Stack.Screen
        options={() => ({
          headerLeft: () => null,
        })}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
        options={({navigation, route}) => ({
          headerTitle: '',
          headerLeft: () => (
            <Button
              iconLeft
              transparent
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              <Icon name="arrow-back" />
            </Button>
          ),
          headerRight: () => (
            <Button
              style={{marginRight: 10}}
              iconLeft
              transparent
              onPress={() => {
                props.navigation.toggleDrawer();
              }}>
              <Icon color="#fff" name={isDrawerOpen ? 'menu' : 'menu'} />
            </Button>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
