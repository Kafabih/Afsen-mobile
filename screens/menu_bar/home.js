import React, {useState, useEffect, Component} from 'react';
import styled from 'styled-components/native';
import Header from '../../components/header';
import Avatar from '../../components/avatar';
import {Card} from 'react-native-shadow-cards';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

class Home extends Component {
  //digital clocks
  constructor(props) {
    super(props);

    this.state = {
      currentTime: null,
      currentDay: null,
      array: [
        {
          key: '1',
          title: 'Kafabih',
          subtitle: 'Hadir',
          line: '__________________________________________________',
        },
        {
          key: '2',
          title: 'Gofar Ismail',
          subtitle: 'Izin',
          line: '__________________________________________________',
        },
        {
          key: '3',
          title: 'Nia Karlina',
          subtitle: 'Sakit',
          line: '__________________________________________________',
        },
      ],
    };
    this.daysArray = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  componentWillMount() {
    this.getCurrentTIme();
  }

  getCurrentTIme = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({
      currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm,
    });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({currentDay: item.toString()});
      }
    });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTIme();
    }, 1000);
  }

  //checkin
  checkIn() {
    axios
      .post('https://afsen.afedigi.com/api/checkin', {
        user_id: 1,
        lat: '12.1234',
        lng: '12.1234',
        address: 'Tes ajaa',
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Info Attendance
  list = () => {
    return this.state.array.map((element) => {
      return (
        <ScrollView>
          <View  style={styles.info}>
            <View style={styles.rowContainer} key={element.key}>
              <Text style={styles.infoText}>{element.title}</Text>
              <Text style={styles.textStyle}>{element.subtitle}</Text>
              <Text>{element.line}</Text>
            </View>
          </View>
        </ScrollView>
      );
    });
  };
  render(props) {
    return (
      <View style={styles.container}>
        <Header headerTitle="" />
        <View style={styles.rowContainer}>
          <Avatar imageSource={require('../../assets/jotet.jpeg')} />
          <Card
            style={{
              padding: 10,
              margin: 10,
              height: 50,
              width: 250,
              backgroundColor: '#ffffff',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              The Future is Here
            </Text>
          </Card>
        </View>
        <Card
          style={{
            padding: 30,
            margin: 20,
            paddingTop: 15,
            backgroundColor: '#C3C3C3',
          }}>
          <Text style={styles.TextLeft}>
            <Text style={{fontSize: 18}}>{this.state.currentDay}</Text>
          </Text>
          <Text style={styles.textMiddle}>{this.state.currentTime}</Text>
          <View style={{alignItems: 'flex-end', paddingBottom: 10}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                height: 70,
                backgroundColor: '#fff',
                borderRadius: 50,
              }}
              onPress={() => this.checkIn()}>
              <MaterialCommunityIcons
                name={'fingerprint'}
                size={30}
                color="#01a699"
              />
            </TouchableOpacity>
          </View>
        </Card>
        <View>{this.list}</View>
          
          {/* <View style={styles.info}>
            <View style={styles.rowContainer}>
              <Text style={styles.infoText}>Gofar Ismail</Text>
              <Text style={styles.textStyle}>Absent</Text>
            </View>
            <Text>__________________________________________________</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.rowContainer}>
              <Text style={styles.infoText}>Nia Karlina</Text>
              <Text style={styles.textStyle}>Ijin</Text>
            </View>
            <Text>__________________________________________________</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.rowContainer}>
              <Text style={styles.infoText}>Illganeau</Text>
              <Text style={styles.textStyle}>Nerfed</Text>
            </View>
            <Text>__________________________________________________</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.rowContainer}>
              <Text style={styles.infoText}>Mugnier</Text>
              <Text style={styles.textStyle}>Rotated</Text>
            </View>
            <Text>__________________________________________________</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.rowContainer}>
              <Text style={styles.infoText}>Iceschillendrig</Text>
              <Text style={styles.textStyle}>Cuti</Text>
            </View>
            <Text>__________________________________________________</Text>
          </View> */}
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 18, 26, 0.85)',
    flex: 1,
  },
  rowContainer: {
    width: 100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMiddle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  lineStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  info: {
    alignItems: 'flex-start',
    padding: 20,
  },
  infoText: {
    fontSize: 20,
    color: 'rgba(255,255,255, 0.6)',
    textAlign: 'left',
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
  },
  TextLeft: {
    alignItems: 'flex-start',
  },
});
