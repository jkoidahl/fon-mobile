import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { filterFood } from '../actions/food';

class Food extends Component {

    componentWillMount = () => {
        this.props.filterFood();
    }

    updateSearch = (text) => {
        if (text.length > 1) {
            console.log('props', this.props);
            this.props.filterFood();
        }
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} lightTheme round />
            <Text>
                title bar has a search icon to show and hide the search bar. Wrench icon to show only favorite or all.
                List of Ethnicities each can be favorited-> Click to show -> Detail view with description of food stuffs
            </Text>
        </View>
        );
    }
}   

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, {filterFood})(Food);