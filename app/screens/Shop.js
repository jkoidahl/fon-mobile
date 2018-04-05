import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterFood } from '../actions/food';

const SHOPS = [
    {id: 1, name: 'African American', menu: `af am wares 
        afiou aiudfa fdja dfaldks fjkalaf
        dafdfadf ad 
        adfadsfads fdfswe few 
         few fwe feoijgpioregp qgeg qerg qgfdojadf we 
         adfsd fwe wef we `},
    {id: 2, name: 'America Indian', menu: 'am indian wares'},
    {id: 3, name: 'Bangladeshi', menu: 'bangladeshi wares'},
];

class Shop extends Component {

    componentWillMount = () => {
        // TODO implement filterFood
        // this.props.filterFood();
    }

    updateSearch = (text) => {
        if (text.length > 1) {
        // TODO implement filterFood
        // this.props.filterFood();
        }
    }

    updateFavorite = (e, id) => {
        // TODO implement me
        //this.props.updateFavorite(id);
    }

    isFavorite = (id) => {
        // TODO implement me 
    } 

    handleOnPress = (item) => {
        console.log( 'handle on press', item );
        this.props.navigation.navigate('ShopDetail', {item});
    }
    
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} lightTheme round />;
      }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={SHOPS}
              renderItem={({ item }) => 
                    <ListItem
                    title={`${item.name}`}
                    onPress={() => this.handleOnPress(item)}
                    />
                } 
              keyExtractor={item => item.id}
              ListHeaderComponent={this.renderHeader}
            />
        </View>
        );
    }
}   

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(Shop);