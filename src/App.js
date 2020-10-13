// Imports: Dependencies
import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// Imports: Redux Store
import {store} from './store/index';
import MainNavigation from './navigation/MainNavigation';
import DrawerNavigation from './navigation/DrawerNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}
