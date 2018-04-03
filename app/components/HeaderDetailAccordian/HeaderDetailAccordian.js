import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles';

class HeaderDetailAccordian extends Component {
    static propTypes = {
         sections: PropTypes.array,
    }

    _renderHeader = (section) => {
        return (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        );
      }
    
      _renderContent = (section) => {
        return (
          <View style={styles.content}>
          <FlatList data={section.contentItems} renderItem={({item}) => 
            <Text style={styles.contentText}>
              <Text style={styles.subHeaderText}>{item.header}</Text>
              <Text>{item.body}</Text>
            </Text>}/>
          </View>
        );
      }

    render () {
        return (
            <View style={styles.container}>
                <Accordion
                            sections={this.props.sections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}/>
            </View>
    );}
}


export default HeaderDetailAccordian;