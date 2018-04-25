import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const iconWidth = Dimensions.get('window').width/5;

const NavButton = ({ text, onPress, image }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Ionicons style={styles.icon} name={image} size={iconWidth} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

NavButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    image: PropTypes.string,
};

export default NavButton;