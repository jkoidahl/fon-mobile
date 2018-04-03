import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './styles';


const TextButton = ({ text, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.textContainer}>
            <Text style={styles.textSecondary}>{text}</Text>
        </View>
    </TouchableOpacity>
);

TextButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
};

export default TextButton;