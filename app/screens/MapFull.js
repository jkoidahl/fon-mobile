import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';


import { Map } from '../components/MapList/Map';

class MapFull extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        mapName: PropTypes.string,
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params ? params.name : 'Map',
        }
      };
    
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{flex: 1}}>
                <Image style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} 
                source = {params.fileName}></Image>
            </View>
        );
    }

}

export default withNavigation(MapFull);