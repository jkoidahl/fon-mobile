import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';

import bazaars from '../data/bazaars';

import { Container } from '../components/Container';

class Bazaars extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={bazaars}
              renderItem={({ item }) => 
                <ListItem
                    chevronColor="#BCBBC1"
                    chevron={true}
                    bottomDivider={true}
                    />
                } 
              keyExtractor={item => item}
            />
        </View>
        );
    }

}

export default Bazaars;