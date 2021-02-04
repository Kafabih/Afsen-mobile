import React, {useState, useEffect, Component} from 'react';
import Header from '../../components/header';
import Avatar from '../../components/avatar';
import {Card} from 'react-native-shadow-cards';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { images, icons, COLORS, FONTS, SIZES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
  return (
      <TouchableOpacity
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={onPress}
      >
          <View style={[styles.shadow, { width: 60, height: 60 }]}>
              <LinearGradient
                  style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                  colors={bgColor}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
              >
                  <Image
                      source={icon}
                      resizeMode="cover"
                      style={{
                          tintColor: COLORS.white,
                          width: 30,
                          height: 30,
                      }}
                  />
              </LinearGradient>
          </View>
          <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{label}</Text>
      </TouchableOpacity>
  )
}

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
            <View key={element.key}>
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
            //backgroundColor: '#C3C3C3',
            height: 150
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
        {/* <ScrollView>
        <View>{this.list()}</View>
        </ScrollView> */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Shift"
                        onPress={() => this.props.navigation.navigate('Shiftscreen')}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Salary"
                        onPress={() => this.props.navigation.navigate('Salaryscreen')}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Presences"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Calendar"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Time Off"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="My Profile"
                        onPress={() => { console.log("Eats") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label="Report"
                        onPress={() => this.props.navigation.navigate('Reportscreen')}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="Event"
                        onPress={() => { console.log("Event") }}
                    />
                </View>
            </View>
          
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B747D3',
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}
});
