import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Homescreen extends React.Component {
  doLogout() {
    AsyncStorage.removeItem('token').then((res) => {
      this.props.navigation.navigate('Login');
    });
  }

  render(props) {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.logoutBtn}
            onPress={() => this.doLogout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  logoutBtn: {
    backgroundColor: 'red',
    paddingVertical: 10,
    width: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Homescreen;
