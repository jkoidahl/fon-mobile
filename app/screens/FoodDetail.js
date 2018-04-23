import React, { Component } from 'react';
import { Text } from 'react-native';

import { BulletList } from '../components/BulletList';
import { Container } from '../components/Container';

class FoodDetail extends Component {
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
               
               <BulletList headerText={'Menu'} commaDelimitedText={item.menu}></BulletList>
            </Container>
        );
    }

}

export default FoodDetail;