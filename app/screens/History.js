import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';

class History extends Component {
    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>History below</Text>
            </Container>
        );
    }

}

export default History;