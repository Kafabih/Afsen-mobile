import React from 'react';
import styled from 'styled-components/native';
import {Card} from 'react-native-shadow-cards';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
  background: #fff;
  flex: 1;
`;

const Text = styled.Text``;

function Cuti() {
  return (
    <Container>
      <Text>Cuti</Text>
      <TouchableOpacity>
        <Card style={{padding: 10, margin: 20, height: 80, width: 80}}>
          <Text>bisa disentuh ?</Text>
        </Card>
      </TouchableOpacity>
    </Container>
  );
}

export default Cuti;
