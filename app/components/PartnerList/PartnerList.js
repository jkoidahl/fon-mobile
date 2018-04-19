import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from 'react-native-elements';
import styles from './styles';

const PARTNERS = [
    {id: 1, name: 'International Institute Of MN', icon: require('./images/iimn.jpg'), 
    description: `The Institute delivers services and resources to assist New Americans in the transition to a new life leading to economic self-sufficiency. Working together, New Americans, volunteers, and staff create not only a new home, but also a new future for those who have been displaced. From language learning and job training to citizenship classes and the celebration of cultural traditions, the Institute offers New Americans a pathway for a strong start to a new life in our community – something we all benefit from.`,
    link: 'https://iimn.org'},
    {id: 2, name: 'Minnesota State Arts Board', icon: require('./images/mnarts.png'), description: `This activity is made possible by the voters of Minnesota through a Minnesota State Arts Board Operating Support grant, thanks to a legislative appropriation from the arts and cultural heritage fund.`,
    link: 'http://www.arts.state.mn.us/' },
    {id: 3, name: '3M', icon: require('./images/3m.png'), description: ``, link: 'https://www.3m.com/3M/en_US/company-us/' }
];

class PartnerList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }


    handleOnPress = (item) => {
        this.props.navigation.navigate('PartnerDetail', {item});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                data={PARTNERS}
                renderItem={({ item }) => 
                        <ListItem
                        leftAvatar={ <Avatar avatarStyle={{resizeMode: 'contain', backgroundColor:'white'}} large source={item.icon} />}
                        title={`${item.name}`}
                        onPress={() => this.handleOnPress(item)}
                        />
                    } 
                keyExtractor={item => item.id}
                />
            </View>

        );
    }
}

export default PartnerList;