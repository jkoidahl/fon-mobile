import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import bazaars from '../data/bazaars';

import { Container } from '../components/Container';

class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={bazaars}
              renderItem={({ item }) => 
                    <ListItem
                    title={`${item}`} hideChevron={true}
                    />
                } 
              keyExtractor={item => item}
            />
        </View>
        );
    }

}

export default Shop;