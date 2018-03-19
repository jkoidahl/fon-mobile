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
        this.props.navigation.navigate('Food');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                    <NavButton text="Schedule" image="md-calendar" onPress={this.handleSchedulePress} />
                    <NavButton text="Shop" image="md-cart" onPress={this.handleMapsPress} />
                    <NavButton text="Partners" image="md-people" onPress={this.handleEatPress} />
                </View>
                <View>
                    <NavButton text="Maps" image="md-map" onPress={this.handleMapPress} />
                    <NavButton text="Explore" image="md-compass" onPress={this.handleMapsPress} />
                    <NavButton text="News/Social" image="md-paper" onPress={this.handleEatPress} />
                </View>
                <View>
                    <NavButton text="Eat" image="md-restaurant" onPress={this.handleSchedulePress} />
                    <NavButton text="Festival Info" image="md-information-circle" onPress={this.handleMapsPress} />
                    <NavButton text="Donate" image="md-thumbs-up" onPress={this.handleEatPress} />
                </View>
            </View>
        );
    }
} 

export default Navigation;