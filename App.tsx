import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { BasicSidebarMenu } from './android/app/src/navigator/BasicSidebarMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <BasicSidebarMenu/>
    </NavigationContainer>
  );
};

export default App;
