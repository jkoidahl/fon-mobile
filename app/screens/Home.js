import React, { Component } from 'react';
import { StatusBar, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Navigation }  from '../components/Navigation';
import { NavButton } from '../components/Button';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    render() {
        return (
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            <Logo />
            <Navigation navigation={this.props.navigation} />
        </Container>
        );
    }
}

export default Home;

