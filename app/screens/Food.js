import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterFood } from '../actions/food';

import food from '../data/food';

class Food extends Component {

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
        this.props.navigation.navigate('FoodDetail', {item});
    }
    
    renderHeader = () => {
        return <SearchBar placeholder="Search..." onChangeText={this.updateSearch} lightTheme round />;
      }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={food}
              renderItem={({ item }) => 
                    <ListItem
                    title={`${item.name}`}
                    onPress={() => this.handleOnPress(item)}
                    chevronColor="#BCBBC1"
                    chevron={true}
                    bottomDivider={true}
                    />
                } 
              keyExtractor={item => item.id}
             />
        </View>
        );
    }
}   

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, {filterFood})(Food);