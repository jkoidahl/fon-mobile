import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { HistoryDetail } from '../components/HistoryDetail';

class History extends Component {
    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <HistoryDetail></HistoryDetail>
            </Container>
        );
    }

}

export default History;