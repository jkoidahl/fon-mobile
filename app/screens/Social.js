import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import TextButton from '../components/Button/TextButton';

class Social extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    
    showFacebook = () => {
        Linking.openURL('https://www.facebook.com/FestivalofNationsSaintPaulMN/').catch(err => console.error('An error occurred', err));
    }

    showTwitter = () => {
        
        Linking.openURL('https://twitter.com/mnfestofnations').catch(err => console.error('An error occurred', err));
    }

    showStatus = () => {
        this.props.navigation.navigate('Contact');
    }

    showPhoto = () => {
        this.props.navigation.navigate('Tickets');
    }

    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <TextButton text="Like Us On Facebook" onPress={this.showFacebook}></TextButton>
                <TextButton text="Follow Us On Twitter" onPress={this.showTwitter}></TextButton>
              
            </Container>
            
        );
    }
}

export default Social;