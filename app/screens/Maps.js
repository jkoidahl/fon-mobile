import React, { Component } from 'react';

import { Container } from '../components/Container';
import { MapList } from '../components/MapList';

class Maps extends Component {

    render() {
        return (
            <Container>
                <MapList navigation={this.props.navigation}></MapList>
            </Container>
        );
    }

}

export default Maps;