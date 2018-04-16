import React, { Component } from 'react';
import { Text } from 'react-native';

import { HeaderDetailList } from '../components/HeaderDetailList';
import { Container } from '../components/Container';

class ShopDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.item.name : 'Detail',
        }
      };

    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;

        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               
               <HeaderDetailList data={[{header: 'Description', body: item.description}]}></HeaderDetailList>
            </Container>
        );
    }

}

export default ShopDetail;