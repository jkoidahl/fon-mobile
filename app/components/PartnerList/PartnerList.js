import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import styles from './styles';

class PartnerList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        data: PropTypes.array,
    }


    handleOnPress = (item) => {
        this.props.navigation.navigate('PartnerDetail', {item});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                data={this.props.data}
                renderItem={({ item }) => 
                        <ListItem
                        avatar={require('./images/iimn.jpg')}
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

export default PartnerList;