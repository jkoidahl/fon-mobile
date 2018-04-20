import React, { Component } from 'react';

import activities from '../data/activities';

import { Container } from '../components/Container';
import { HeaderDetailAccordian } from '../components/HeaderDetailAccordian';

class Activities extends Component {
    render() {
        return (
            <Container>
                <HeaderDetailAccordian sections={activities}></HeaderDetailAccordian>
            </Container>
        );
    }

}

export default Activities;