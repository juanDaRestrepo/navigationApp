import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export default function PageThreeScreen({ navigation }: Props) {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>PageThreeScreen</Text>

        <Button
          title='Regresar'
          onPress={ () => navigation.pop() }
        />

        <Button
          title='Ir a la página 1'
          onPress={ () => navigation.popToTop() }
        />
    </View>
  )
}
