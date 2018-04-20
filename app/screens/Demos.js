import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';

import demos from '../data/demos';

import { Container } from '../components/Container';

class Demos extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={demos}
              renderItem={({ item }) => 
                    <ListItem titleNumberOfLines={2}
                    title={`${item}`} hideChevron={true}
                    bottomDivider={true}
                    />
                } 
              keyExtractor={item => item}
            />
        </View>
        );
    }

}

export default Demos;