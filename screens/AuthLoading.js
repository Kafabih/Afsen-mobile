import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthLoading extends React.Component {
  constructor() {
    super();
    this.checkToken();
  }

  checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      this.props.navigation.navigate('Homepage');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  render(props) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
