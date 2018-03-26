import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

class MapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {name: 'Street Level', fileName:require('./Map/images/map2.png')},
                {name: 'Lower Level', fileName:require('./Map/images/map2.png')},
                {name: 'Kellogg Lobby', fileName:require('./Map/images/map2.png')},
                {name: 'Atrium', fileName:require('./Map/images/map2.png')},
                {name: 'International Café', fileName:require('./Map/images/map2.png')},
                {name: 'Bazaar', fileName:require('./Map/images/map2.png')},
                {name: 'World Stage', fileName:require('./Map/images/map2.png')},
                {name: 'Exhibits', fileName:require('./Map/images/map2.png')},
                {name: 'Wilkins Balcony', fileName:require('./Map/images/map2.png')},
                ]
        }
    }

    static propTypes = {
        navigation: PropTypes.object,
    }

    showMap = () => {
        this.props.navigation.navigate('GoogleMap');
    }
    showMapImage = (name, fileName) => {
        this.props.navigation.navigate('Map', {name: name, fileName: fileName});
    }
    render() {
        return(
        <ScrollView style={styles.container}>
            <Button textStyle={styles.buttonText} buttonStyle={styles.button} text='Get Directions' onPress={this.showMap}></Button>
            <FlatList
                    data={this.state.images}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => 
                    <Button textStyle={styles.buttonText} 
                            buttonStyle={styles.button} 
                            text={item.name} 
                            onPress={() => this.showMapImage(item.name, item.fileName)}></Button>
                }
            />

        </ScrollView>);
    }

};


export default MapList;