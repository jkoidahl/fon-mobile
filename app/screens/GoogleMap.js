import MapView, { Marker } from 'react-native-maps';
import React, { Component, } from 'react';
import  { Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

const styles = EStyleSheet.create({
    map: {
      ...EStyleSheet.absoluteFillObject,
    },
  });


const ASPECT_RATIO = width / height;
const LATITUDE = 44.943888;
const LONGITUDE = -93.099710;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            },
          };
    }

    render() {
        return (
            <MapView
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <Marker
              title="Festival Of Nations 2018"
              description="Saint Paul Rivercentre"
              coordinate={this.state.region}
            />
          </MapView>
        );
    }

}

export default GoogleMap;