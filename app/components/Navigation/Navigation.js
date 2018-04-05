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

    handleEatPress = () => {
        this.props.navigation.navigate('Food');
    }

    handleMapsPress = () => {
        this.props.navigation.navigate('Maps');
    }
    handleInfoPress = () => {
        this.props.navigation.navigate('Info');
    }

    handleShopPress = () => {
        this.props.navigation.navigate('Shop');
    }

    handlePartnersPress = () => {
        this.props.navigation.navigate('Partners');
    }

    handleExplorePress = () => {
        console.log('handle explore press');
    }

    handleNewsPress = () => {
        this.props.navigation.navigate('Social');
    }

    handleDonatePress = () => {
        this.props.navigation.navigate('Donate');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                    <NavButton text="Schedule" image="md-calendar" onPress={this.handleSchedulePress} />
                    <NavButton text="Shop" image="md-cart" onPress={this.handleShopPress} />
                    <NavButton text="Partners" image="md-people" onPress={this.handlePartnersPress} />
                </View>
                <View>
                    <NavButton text="Maps" image="md-map" onPress={this.handleMapsPress} />
                    <NavButton text="Explore" image="md-compass" onPress={this.handleExplorePress} />
                    <NavButton text="News/Social" image="md-paper" onPress={this.handleNewsPress} />
                </View>
                <View>
                    <NavButton text="Eat" image="md-restaurant" onPress={this.handleEatPress} />
                    <NavButton text="Festival Info" image="md-information-circle" onPress={this.handleInfoPress} />
                    <NavButton text="Donate" image="md-thumbs-up" onPress={this.handleDonatePress} />
                </View>
            </View>
        );
    }
} 

export default Navigation;