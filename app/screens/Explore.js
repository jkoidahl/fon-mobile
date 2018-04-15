import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Text } from 'react-native';

import TextButton from '../components/Button/TextButton';
import { Container } from '../components/Container';

class Explore extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    
    showExhibits = () => {
        this.props.navigation.navigate('Exhibits');
    }
    showActivities = () => {
        this.props.navigation.navigate('Activities');
    }
    showDemos = () => {
        this.props.navigation.navigate('Demos');
    }


    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <TextButton text="Cultural Exhibits" onPress={this.showExhibits}></TextButton>
                <TextButton text="Demonstrations" onPress={this.showDemos}></TextButton>
                <TextButton text="Activities" onPress={this.showActivities}></TextButton>
            </Container>
        );
    }

}

export default Explore;