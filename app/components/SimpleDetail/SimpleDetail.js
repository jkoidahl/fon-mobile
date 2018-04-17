import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import styles from './styles';

class SimpleDetail extends Component {
    static propTypes = {
         text: PropTypes.string,
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.detail}>
                        {this.props.text}
                    </Text>
                </View>
            </View>
    );}
}


export default SimpleDetail;