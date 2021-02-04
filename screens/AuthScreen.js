import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';

class Login extends React.Component {
  // state = {isFocused: false};

  // onFocusChange = () => {
  //   this.setState({isFocused: true});
  // };
  render(props) {
    // const {username, password, loading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Absensi</Text>
        <Image
          source={require('../assets/no_image.png')}
          resizeMode="center"
          style={styles.image}
        />
        <View style={styles.formWrapper}>
          <View style={styles.formRow}>
            <Input
              placeholder="Username"
              leftIcon={{
                type: 'font-awesome',
                name: 'user',
                color: 'white',
              }}
            />
          </View>
          <View style={styles.formRow}>
            <Input
              placeholder="Password"
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: 'white',
              }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.loginBtn,
              backgroundColor: '#301834',
            }}
            onPress={() => this.props.navigation.navigate('Homepage')}>
            <LinearGradient
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              colors={['#fff', '#fff']}
              style={{borderRadius: 3}}>
              <View style={styles.circleGradient}>
                <Text style={styles.loginText}>login</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={{paddingVertical: 10}}>
          <View style={styles.register}>
            <Text
              style={styles.registerText}
              onPress={() => this.props.navigation.navigate('Validasi')}>
              Register Account
            </Text>
          </View>
          <View style={styles.resetpw}>
            <Text
              style={styles.resetpwText}
              onPress={() => this.props.navigation.navigate('Reset')}>
              Reset Password
            </Text>
          </View>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#301834',
  },
  formWrapper: {
    width: '80%',
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#301834',
    height: 40,
    paddingHorizontal: 10,
    color: '#fff',
  },
  loginBtn: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  loginText: {
    textAlign: 'center',
    color: '#B1AFAF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    textAlign: 'center',
    color: '#B1AFAF',
    fontSize: 48,
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 20,
  },
  circleGradient: {
    margin: 2,
    backgroundColor: '#301834',
    borderRadius: 3,
    paddingLeft: 5,
  },
  registerText: {
    textAlign: 'center',
    color: '#B1AFAF',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  resetpwText: {
    textAlign: 'center',
    color: '#B1AFAF',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  register: {
    paddingHorizontal: 15,
  },
  resetpw: {
    paddingHorizontal: 15,
  },
});

export default Login;
