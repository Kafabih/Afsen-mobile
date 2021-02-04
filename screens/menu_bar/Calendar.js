import React, { Component } from 'react';
import styled from 'styled-components/native';
import {View, Image, Text, StyleSheet, Platform} from 'react-native';
import DateTime from 'react-native-customize-selected-date';
import _ from 'lodash';

class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: ''
    }
  }

  onChangeDate(date){
    alert(date)
  }

  renderChildDay(day){
    if(_.includes(['2021-01-15', '2021-02-10', '2021-02-20'], day)){
      return <Image source={require('../../assets/ic_lock_green.png')} style={styles.icLockRed}/>
    }
    if(_.includes(['2021-01-16', '2021-02-12', '2021-02-18'], day)){
      return <Image source={require('../../assets/ic_lock_red.png')} style={styles.icLockRed} />
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <DateTime 
          date={this.state.time}
          changeDate={(day) => this.onChangeDate(day)}
          format='YYYY-MM_DD'
          renderChildDay={(day) => this.renderChildDay(day)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  icLockRed: {
    width: 13/2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1
  }
});

export default Calendar;
