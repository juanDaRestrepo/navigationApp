import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export default function PageOneScreen({ navigation }: Props) {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PageOneScreen</Text>

        <Button
          title='Ir a la página 2'
          onPress={ () => navigation.navigate('PageTwoScreen')}
        />
    </View>
  )
}
