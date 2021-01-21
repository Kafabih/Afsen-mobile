import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';
// import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    });
  }

  doLogin() {
    const {username, password} = this.state;
    if (username && password) {
      const req = {
        email: username,
        password: password,
      };
      this.setState({
        loading: true,
      });
      axios.post('https://afsen.afedigi.com/api/login', req).then(
        (res) => {
          this.setState({
            loading: false,
          });
          AsyncStorage.setItem('token', res.data.data.token).then((res) => {
            console.warn(req);
            this.props.navigation.navigate('Homepage');
            alert('Login Successfull!!');
          });
        },
        (err) => {
          console.warn(err);
          this.setState({
            loading: false,
          });
          alert('Username or Password is wrong');
        },
      );
    } else {
      alert('enter username and password');
    }
  }

  render(props) {
    const {username, password, loading} = this.state;
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
              style={styles.textInput}
              value={username}
              onChangeText={(value) => this.onChangeHandle('username', value)}
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
              style={styles.textInput}
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => this.onChangeHandle('password', value)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.loginBtn,
              backgroundColor: loading ? '#301834' : '#301834',
            }}
            onPress={() => this.doLogin()}
            disabled={loading}>
            <LinearGradient
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              colors={['#fff', '#fff']}
              style={{borderRadius: 3}}>
              <View style={styles.circleGradient}>
                <Text style={styles.loginText}>
                  {loading ? 'loading...' : 'login'}
                </Text>
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
