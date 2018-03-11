import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { loadSchedule } from '../actions/schedule';

import events from '../data/events';


class Schedule extends Component {
    static propTypes =  {
        dispatch: PropTypes.func
    }

    componentWillMount() {
        // todo attach to dispatch
        this.props.dispatch(loadSchedule());
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
              data={events}
              renderItem={({ item }) => 
              <Text>{item.title} {item.location}</Text>} 
              keyExtractor={item => item.id}
            />
          </View>
        );
    }
}

export default connect()(Schedule);