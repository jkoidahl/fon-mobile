import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';

class Contact extends Component {
    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Conact Us</Text>
            </Container>
        );
    }

}

export default Contact;