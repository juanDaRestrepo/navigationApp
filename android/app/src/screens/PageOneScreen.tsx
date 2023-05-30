import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export default function PageOneScreen({navigation}: Props) {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PageOneScreen</Text>

      <Button
        title="Ir a la página 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />
      <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: 'gray'
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text  style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: 'blue'
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Jose',
            })
          }>
          <Text style={styles.bigButtonText}>Jose</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
