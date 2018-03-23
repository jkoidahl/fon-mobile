import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

class MapList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    showMap = () => {
        this.props.navigation.navigate('GoogleMap');
    }
    render() {
        return(
        <View style={styles.container}>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Get Directions' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Street Level' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Lower Level' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Kellogg Lobby' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Atrium' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='International Café' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Bazaar' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='World Stage' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Exhibit' onPress={this.showMap}></Button>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Wilkins Balcony' onPress={this.showMap}></Button>
        </View>);
    }

};


export default MapList;