import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function PermissionShift() {
    
     return (
    
            <View  style={styles.container}>
                <View>
              <Text style={{color: '#000'}}>Permission Shift Pages</Text>
              </View>
            </View>
    
    
        );
      }

export default PermissionShift;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})