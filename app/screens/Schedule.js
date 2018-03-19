import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadSchedule, filterSchedule, updateFavorite } from '../actions/schedule';

class Schedule extends Component {
    static propTypes =  {
        events: PropTypes.array,
        filterSchedule: PropTypes.func,
        loadSchedule: PropTypes.func,
        updateFavorite: PropTypes.func,
    }

    componentWillMount() {
        this.props.loadSchedule();
    }

    updateSearch = (text) => {
        if (text.length > 1) {
            this.props.filterSchedule(text);
        } 
    }

    updateFavorite = (e, id) => {
        this.props.updateFavorite(id);
    }

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} lightTheme round />;
      }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={this.props.events}
              renderItem={({ item }) => 
                    <ListItem
                    title={`${item.title}`}
                    subtitle={item.location}
                    rightIcon={{name: ((item.isFavorite) ? "favorite" :"favorite-border")}}
                    onPressRightIcon={(e) => this.updateFavorite(e, item.id)}
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
    const events = state.schedule.events;
    return {
        events,
    };
};

export default connect(mapStateToProps, {filterSchedule, loadSchedule, updateFavorite})(Schedule);