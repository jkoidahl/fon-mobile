import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const TextButton = ({ text, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

TextButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
};

export default TextButton;