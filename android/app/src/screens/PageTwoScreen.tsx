import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export default function PageTwoScreen({ navigation }: Props) {

  useEffect(() => {
    
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: ''
    })
   
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageTwoScreen</Text>
      <Button
        title="Ir a la página 3"
        onPress={() => navigation.navigate('PageThreeScreen')}
      />
    </View>
  );
}
