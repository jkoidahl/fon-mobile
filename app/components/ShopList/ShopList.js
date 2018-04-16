import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem} from 'react-native-elements';
import styles from './styles';

class ShopList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        data: PropTypes.array,
    }


    handleOnPress = (item) => {
        this.props.navigation.navigate('ShopDetail', {item});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <Text style={styles.header}>Bazaar &  Marketplace</Text>
                <Text style={styles.detail}>Discover A Diverse Collection Of Goods And Crafts Inspired By Ethnic Cultures And Traditions From Around The World. </Text>
                <FlatList
                data={this.props.data}
                renderItem={({ item }) => 
                        <ListItem
                        title={`${item.name}`}
                        onPress={() => this.handleOnPress(item)}
                        />
                    } 
                keyExtractor={item => item.id}
                />
            </View>

        );
    }
}

export default ShopList;