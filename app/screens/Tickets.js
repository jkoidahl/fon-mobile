import React, { Component } from 'react';
import { Text } from 'react-native';

import { HeaderDetailList } from '../components/HeaderDetailList';
import { Container } from '../components/Container';

import tickets from '../data/tickets';

class Tickets extends Component {
    render() {
        return (
            <Container>
                <HeaderDetailList data={tickets}></HeaderDetailList>
            </Container>
        );
    }

}

export default Tickets;