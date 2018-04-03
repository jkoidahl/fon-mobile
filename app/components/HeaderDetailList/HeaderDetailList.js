import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, FlatList } from 'react-native';

import styles from './styles';

class HeaderDetailList extends Component {
    static propTypes = {
         data: PropTypes.array,
    }

    render () {
        return (
            <View style={styles.container}>
            <FlatList data={this.props.data} renderItem={({item}) => 
                <View>
                    <Text style={styles.header}>{item.header}</Text>
                    <Text style={styles.detail}>{item.body}</Text>
                </View>
            } keyExtractor= {item => item.header} />
            </View>
    );}
}


export default HeaderDetailList;