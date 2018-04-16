import React, { Component } from 'react';
import { ShopList } from '../components/ShopList';

import bazaars from '../data/bazaars';

class Shop extends Component {
    render() {
        return (
            <ShopList data={bazaars} navigation={this.props.navigation}/>
        );
    }

}

export default Shop;