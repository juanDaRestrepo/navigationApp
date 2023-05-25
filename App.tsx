import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>App Screen</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
