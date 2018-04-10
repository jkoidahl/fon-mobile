import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class DateFilterHeader extends Component {
    static propTypes = {
        navData: PropTypes.object,
        onPressRightNav: PropTypes.func,
        onPressLeftNav: PropTypes.func,
    }
    

    renderRightNav = () => {
        if (this.props.navData.items.length > this.props.navData.currentIndex+1) {
            return (
                <TouchableOpacity onPress={this.props.onPressRightNav}>
                    <Text style={[styles.text, {textAlign: 'right'}]}>
                        {this.props.navData.items[this.props.navData.currentIndex +1].title}{' >'}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    renderLeftNav = () => {
        if ( this.props.navData.currentIndex > 0 ) {
            return (
                <TouchableOpacity onPress={this.props.onPressLeftNav}>
                    <Text style={[styles.text, {textAlign: 'left'}]}>
                    {'< '} {this.props.navData.items[this.props.navData.currentIndex -1].title}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <View style={styles.navBar}>
                <View style={styles.leftContainer}>
                    {this.renderLeftNav()}
                </View>

                <Text style={styles.middleText}>
                    {this.props.navData.items[this.props.navData.currentIndex].title}
                </Text>
                
                <View style={styles.rightContainer}>
                    {this.renderRightNav()}
                </View>
            </View>
        );
    }
}

export default DateFilterHeader;