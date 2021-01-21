import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Image, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';

function SplashScreen({navigation, route}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 3000); //3detik
  });
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#301834',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar hidden />
      <Image source={require('../assets/no_image.png')} />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 48,
        }}>
        Absensi
      </Text>
    </SafeAreaView>
  );
}

export default SplashScreen;
