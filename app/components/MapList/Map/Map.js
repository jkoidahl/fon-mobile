import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const Map = () => (

            <Image style={{flex: 1, width: null, height: null, resizeMode: 'contain'}} source = {require('../components/MapList/Map/images/map2.png')}></Image>
);

export default Map;