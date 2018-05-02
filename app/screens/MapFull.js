import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';


import { Map } from '../components/MapList/Map';
import { ZoomableImage } from '../components/ZoomableImage';

class MapFull extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        mapName: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number
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
            <ZoomableImage style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}} imageWidth={params.width} imageHeight={params.height} source= {params.fileName} />
        );
    }

}

export default withNavigation(MapFull);