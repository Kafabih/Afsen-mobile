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

class ValidasiRegister extends React.Component {
  state = {
    company_name: '',
    loading: false,
  };

  onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    });
  }

  doValidate() {
    const {company_name} = this.state;
    if (company_name) {
      const req = {
        company_name: company_name,
      };
      this.setState({
        loading: true,
      });
      // console.warn(req);
      axios
        .post('http://fb964f8c624c.ngrok.io/register_account/check', req)
        .then(
          (res) => {
            // console.warn(res.data);
            this.props.navigation.navigate('Register',); //{company: res.data.data}
            alert('Company is found!!');
          },
          (err) => {
            // console.warn(err);
            this.setState({
              loading: false,
            });
            alert('Company not found');
          },
        );
    } else {
      alert('enter Company Name');
    }
  }
  render() {
    const {company_name, loading} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              color: '#fff',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 48,
            }}>
            AFEDIGI
          </Text>
        </View>
        <View style={{paddingVertical: 20}}>
          <Text style={{color: '#fff', textAlign: 'left', fontSize: 24}}>
            Register Account
          </Text>
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: '#fff', textAlign: 'left', fontSize: 18}}>
            fill in the fields below with the registered company name.
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Company Name"
              placeholderTextColor="#333"
              value={company_name}
              onChangeText={(value) =>
                this.onChangeHandle('company_name', value)
              }
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.registerBtn,
              backgroundColor: loading ? '#301834' : '#301834',
            }}
            onPress={() => this.doValidate()}
            disabled={loading}>
            <LinearGradient
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              colors={['#fff', '#fff']}
              style={{borderRadius: 3}}>
              <View style={styles.circleGradient}>
                <Text style={styles.RegisterText}>
                  {loading ? 'loading...' : 'Validate'}
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
    justifyContent: 'center',
    backgroundColor: '#301834',
    paddingTop: 10,
  },
  formWrapper: {
    width: '80%',
  },
  formRow: {
    marginBottom: 10,
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

export default ValidasiRegister;
