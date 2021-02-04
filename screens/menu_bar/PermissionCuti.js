import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function PermissionCuti() {
    
     return (
    
            <View style={styles.container}>
                <View >
              <Text style={{color: '#000'}}>Permission Cuti Pages</Text>
               </View>
            </View>
    
    
        );
      }

export default PermissionCuti;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})