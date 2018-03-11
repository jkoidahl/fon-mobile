import React from 'react';
import { View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        {/* <Image source={ require('./images/logo.png')}></Image> */}
        <Text style={styles.text}>Festival Of Nations 2018</Text>
        <Ionicons name="ios-globe-outline" size={256} color="white" />
    </View>


);


export default Logo;