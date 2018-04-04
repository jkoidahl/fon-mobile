import React, { Component } from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';

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
                <Text>{JSON.stringify(item)} The Festival Of Nations is presented by the International Institute of Minnesota. For general information about the Festival Of Nations please send an email inqueries to info@festivalofnations.com</Text>
            </Container>
        );
    }

}

export default FoodDetail;