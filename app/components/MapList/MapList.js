import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, Text, FlatList } from 'react-native';
import TextButton from '../Button/TextButton';
import styles from './styles';

class MapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {name: 'Street Level', fileName:require('./Map/images/street.jpg')},
                {name: 'Lower Level', fileName:require('./Map/images/lower.jpg')},
                {name: 'Kellogg Lobby', fileName:require('./Map/images/kellogg.jpg')},
                {name: 'Atrium', fileName:require('./Map/images/atrium.jpg')},
                {name: 'International Café', fileName:require('./Map/images/cafe.jpg')},
                {name: 'Bazaar', fileName:require('./Map/images/market.jpg')},
                {name: 'World Stage', fileName:require('./Map/images/world-stage.jpg')},
                {name: 'Exhibits', fileName:require('./Map/images/exhibits.jpg')},
                {name: 'Wilkins Balcony', fileName:require('./Map/images/wilkins.jpg')},
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
            <TextButton text='Get Directions' onPress={this.showMap}></TextButton>
            <FlatList
                    data={this.state.images}
                    keyExtractor={item => item.name}
                    renderItem={({item}) => 
                    <TextButton
                            text={item.name} 
                            onPress={() => this.showMapImage(item.name, item.fileName)}></TextButton>
                }
            />

        </ScrollView>);
    }

};


export default MapList;