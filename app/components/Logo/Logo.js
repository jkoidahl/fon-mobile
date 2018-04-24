import React from 'react';
import { View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image style={styles.image} source={ require('./images/fon2018logo.png')}></Image> 
        <Text style={styles.text}>Festival Of Nations 2018</Text>
    </View>


);


export default Logo;