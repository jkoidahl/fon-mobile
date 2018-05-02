import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, FlatList } from 'react-native';
import TextButton from '../Button/TextButton';
import styles from './styles';

class MapList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {name: 'Street Level', fileName:require('./Map/images/street.jpg'), height: 2200, width:1700},
                {name: 'Lower Level', fileName:require('./Map/images/lower.jpg'), height: 2200, width:1700},
                {name: 'Kellogg Lobby', fileName:require('./Map/images/kellogg.jpg'), height: 2200, width:1700},
                {name: 'Atrium', fileName:require('./Map/images/atrium.jpg'), height: 2200, width:1700},
                {name: 'International Café', fileName:require('./Map/images/cafe.jpg'), height: 2200, width:1700},
                {name: 'Bazaar', fileName:require('./Map/images/market.jpg'), height: 2200, width:1700},
                {name: 'World Stage', fileName:require('./Map/images/world-stage.jpg'), height: 2200, width:1700},
                {name: 'Exhibits', fileName:require('./Map/images/exhibits.jpg'), height: 2200, width:1700},
                {name: 'Wilkins Balcony', fileName:require('./Map/images/wilkins.jpg'), height: 2200, width:1700},
                ]
        }
    }

    static propTypes = {
        navigation: PropTypes.object,
    }

    showMap = () => {
        this.props.navigation.navigate('GoogleMap');
    }
    showMapImage = (item) => {
        this.props.navigation.navigate('Map', {...item});
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
                            onPress={() => this.showMapImage(item)}></TextButton>
                }
            />

        </ScrollView>);
    }

};


export default MapList;