import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';

import exhibits from '../data/exhibits';

import { Container } from '../components/Container';

class Exhibits extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={exhibits}
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

export default Exhibits;