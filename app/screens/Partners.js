import React, { Component } from 'react';
import { PartnerList } from '../components/PartnerList';

class Partners extends Component {

    render() {
        return (
            <PartnerList navigation={this.props.navigation}/>
        );
    }
}   

export default Partners;