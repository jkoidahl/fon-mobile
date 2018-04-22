import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, SectionList, FlatList } from 'react-native';
import { List, ListItem, SearchBar, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { DateFilterHeader } from '../components/DateFilterHeader';

import { loadSchedule, filterSchedule, updateFavorite, updateFilterDate } from '../actions/schedule';

class Schedule extends Component {
    static propTypes =  {
        events: PropTypes.array,
        filterSchedule: PropTypes.func,
        loadSchedule: PropTypes.func,
        updateFavorite: PropTypes.func,
        favoriteEvents: PropTypes.array,
        navData: PropTypes.object,
    }

    componentWillMount() {
        this.props.loadSchedule();
    }

    updateSearch = (text) => {
        this.props.filterSchedule(text);
    }

    updateFavorite = (e, id) => {
        this.props.updateFavorite(id);
    }

    renderHeader = () => {
        return <SearchBar placeholder="Search..." onChangeText={this.updateSearch} lightTheme round />;
    }

    onPressRightNav = () => {
        this.props.updateFilterDate(1);
    }

    onPressLeftNav = () => {
        this.props.updateFilterDate(-1);
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <DateFilterHeader navData={this.props.navData} onPressRightNav={this.onPressRightNav} 
                onPressLeftNav={this.onPressLeftNav}/>
             <FlatList 
              data={this.props.events}
              renderItem={({ item }) => 
                 <ListItem
                     title={`${item.title}`}
                     subtitle={`${item.date} ${item.startTime} -  ${item.endTime} \n${item.location}`}
                     bottomDivider={true}
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
    const favoriteEvents = state.schedule.favoriteEvents;
    const navData = state.schedule.navData;
    let result = {
        favoriteEvents: favoriteEvents,
        events: events,
        navData: navData,
        arrangedEvents: state.schedule.arrangedEvents
    };
    return result;
};

export default connect(mapStateToProps, {filterSchedule, loadSchedule, updateFavorite, updateFilterDate})(Schedule);