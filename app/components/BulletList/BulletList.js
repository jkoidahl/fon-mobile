import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Linking, FlatList } from 'react-native';

import styles from './styles';

class BulletList extends Component {
    static propTypes = {
         commaDelimitedText: PropTypes.string,
         headerText: PropTypes.string,
    }

    render () {
        const list  = (this.props.commaDelimitedText.split(','));
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.props.headerText}</Text>
                <FlatList style={styles.detailWrapper} data={list} renderItem={({item}) => 
                    <Text>
                        <Text style={styles.bullet}>
                            <Text>{'\u2022   '}</Text>
                        </Text>
                        <Text style={styles.detail}>
                            <Text>{item.trim()}</Text>
                        </Text>
                    </Text>
                } keyExtractor= {item => item} />
            </View>
    );}
}


export default BulletList;