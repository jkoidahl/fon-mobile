import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';

class Donate extends Component {
    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>The Festival Of Nations is presented by the International Institute of Minnesota. For general information about the Festival Of Nations please send an email inqueries to info@festivalofnations.com</Text>
            </Container>
        );
    }

}

export default Donate;