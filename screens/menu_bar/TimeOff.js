import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import Header from '../../components/header';


const Container = styled.View`
  background: #fff;
  flex: 1;
`;

const Text = styled.Text``;

function TimeOff() {
    var myloop = [];

    for (let i = 0; i < 10; i++) {
      myloop.push(
        <View key={i}>
        <Text>{i}</Text>
        </View>
      );
    }
    
     return (
    
            <Container >
                <View>
              <Text >Welcome to React Native!</Text>
               {myloop}
               </View>
            </Container>
    
    
        );
      }

export default TimeOff;