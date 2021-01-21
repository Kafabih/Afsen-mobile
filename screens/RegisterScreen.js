import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

class Register extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    email: '',
    company_id: '1',
    loading: false,
  };

  onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    });
  }

  doRegister() {
    const {name, username, password, email, company_id} = this.state;
    if (name && username && password && email && company_id) {
      const req = {
        name: name,
        username: username,
        password: password,
        email: email,
        company_id: company_id,
      };
      this.setState({
        loading: true,
      });
      axios.post('https://fb964f8c624c.ngrok.io/register_account', req).then(
        (res) => {
          this.setState({
            loading: false,
          }).then((res) => {
            alert('Registration Is Successful!!');
          });
        },
        (err) => {
          console.warn(err);
          this.setState({
            loading: false,
          });
          alert('Registration failed');
        },
      );
    } else {
      alert('complete your registration');
    }
  }

  render() {
    const {name, username, password, email, company_id, loading} = this.state;
    // const company = this.props.route.params.company;
    // console.warn(company);
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 48,
          }}>
          Register Form
        </Text>
        <View style={styles.formWrapper}>
          {/* <View style={styles.formRow}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 18,
              }}>
              Company ID
            </Text>
            <TextInput
              style={styles.textInput}
              value={company_id}
              placeholderTextColor='black'
              onChangeText={(value) => this.onChangeHandle('company_id', value)}
            />
          </View> */}
          <View style={styles.formRow}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 18,
              }}>
              Username
            </Text>
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={(value) => this.onChangeHandle('username', value)}
              placeholderTextColor='black'
            />
          </View>
          <View style={styles.formRow}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 18,
              }}>
              Email
            </Text>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={(value) => this.onChangeHandle('email', value)}
            />
          </View>
          <View style={styles.formRow}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 18,
              }}>
              Name
            </Text>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={(value) => this.onChangeHandle('name', value)}
            />
            
          </View>
          <View style={styles.formRow}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 18,
              }}>
              password
            </Text>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={(value) => this.onChangeHandle('password', value)}
            />
            
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.registerBtn,
              backgroundColor: loading ? '#301834' : '#301834',
            }}
            onPress={() => this.doRegister()}
            disabled={loading}>
            <LinearGradient
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              colors={['#fff', '#fff']}
              style={{borderRadius: 3}}>
              <View style={styles.circleGradient}>
                <Text style={styles.RegisterText}>
                  {loading ? 'loading...' : 'Register'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingTop: 20,
            color: '#B1AFAF',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}
          onPress={() => this.props.navigation.navigate('Login')}>
          Back to Login Page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#301834',
    paddingTop: 30,
  },
  formWrapper: {
    paddingTop: 30,
    width: '80%',
  },
  formRow: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#ddd',
    height: 40,
    paddingHorizontal: 10,
    color: '#333',
  },
  circleGradient: {
    margin: 2,
    backgroundColor: '#301834',
    borderRadius: 5,
    paddingLeft: 5,
  },
  registerBtn: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  RegisterText: {
    textAlign: 'center',
    color: '#B1AFAF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Register;
