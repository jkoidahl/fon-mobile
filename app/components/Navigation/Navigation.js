import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { NavButton } from '../Button';

import styles from './styles';

class Navigation extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    handleSchedulePress = () => {
        this.props.navigation.navigate('Schedule');
    }

    handleMapsPress = () => {
        console.log('Handle maps press');
    }

    handleEatPress = () => {
        console.log('Handle eat press');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                    <NavButton text="Schedule" image="md-calendar" onPress={this.handleSchedulePress} />
                    <NavButton text="Maps" image="md-map" onPress={this.handleMapsPress} />
                    <NavButton text="Eat" image="md-ice-cream" onPress={this.handleEatPress} />
            </View>
        );
    }
} 

export default Navigation;