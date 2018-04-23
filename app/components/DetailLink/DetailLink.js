import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Linking } from 'react-native';

import styles from './styles';

class DetailLink extends Component {
    static propTypes = {
         url: PropTypes.string,
         text: PropTypes.string,
    }

    render () {
        const hasLink = (this.props.url);

        const link =  hasLink ? ( 
             <Text style={styles.link}
                 onPress={() => Linking.openURL(this.props.url)}>{this.props.text}</Text>) : null;

        return (
            <View style={styles.container}>{link}</View>
    );}
}


export default DetailLink;