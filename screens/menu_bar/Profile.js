import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Avatar from '../../components/avatar';

function menu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Profile Menu</Text>
      </View>
      <View style={styles.header}>
        <View
          style={{
            width: 112,
            height: 112,
            borderRadius: 56,
            shadowColor: 'rgba(58, 20, 64, 0.76)',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 12,
          }}>
          <Image
            source={require('../../assets/jotet.jpeg')}
            style={styles.image}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.info}>
          <Text style={styles.infoText}>Fullname</Text>
          <Text style={styles.textStyle}>Kafabih</Text>
          <Text>__________________________________________________</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Email</Text>
          <Text style={styles.textStyle}>abikafabih@gmail.com</Text>
          <Text>__________________________________________________</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Address</Text>
          <Text style={styles.textStyle}>Indramayu</Text>
          <Text>__________________________________________________</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Perusahaan</Text>
          <Text style={styles.textStyle}>Afedigi</Text>
          <Text>__________________________________________________</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={{fontSize: 14, color: '#fff', textAlign: 'center'}}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default menu;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(24, 18, 26, 0.85)',
    flex: 1,
  },
  RowContainer: {
    width: 100,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 10,
    position: 'relative',
    alignItems: 'center',
    padding: 15,
    margin: 10,
  },
  textHeader: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
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
  logoutButton: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: 'rgba(235, 59, 90, 0.56)',
    margin: 70,
    borderRadius: 56,
    shadowColor: 'rgba(58, 20, 64, 0.76)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 12,
  },
});
