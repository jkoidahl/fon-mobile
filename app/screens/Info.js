import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import TextButton from '../components/Button/TextButton';

class Info extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    
    showFaqs = () => {
        this.props.navigation.navigate('Faq');
    }

    showHistory = () => {
        this.props.navigation.navigate('History');
    }

    showContact = () => {
        this.props.navigation.navigate('Contact');
    }

    showTickets = () => {
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
                <TextButton text="Tickets" onPress={this.showTickets}></TextButton>
                <TextButton text="FAQs" onPress={this.showFaqs}></TextButton>
                <TextButton text="History" onPress={this.showHistory}></TextButton>
                <TextButton text="Contact Us" onPress={this.showContact}></TextButton>
              
            </Container>
            
        );
    }
}

export default Info;