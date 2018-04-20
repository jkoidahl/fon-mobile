import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Text, View, FlatList, WebView, Linking } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from 'react-native-elements';
import styles from './styles';

const PARTNERS = [
    {id: 1, name: 'International Institute Of MN', icon: require('./images/iimn.jpg'), 
    description: `The Institute delivers services and resources to assist New Americans in the transition to a new life leading to economic self-sufficiency. Working together, New Americans, volunteers, and staff create not only a new home, but also a new future for those who have been displaced. From language learning and job training to citizenship classes and the celebration of cultural traditions, the Institute offers New Americans a pathway for a strong start to a new life in our community – something we all benefit from.`,
    link: 'https://iimn.org'},
    {id: 2, name: 'Minnesota State Arts Board', icon: require('./images/mnarts.png'), description: `This activity is made possible by the voters of Minnesota through a Minnesota State Arts Board Operating Support grant, thanks to a legislative appropriation from the arts and cultural heritage fund.`,
    link: 'http://www.arts.state.mn.us/' },
    {id: 3, name: '3M', icon: require('./images/3m.png'), link: 'https://www.3m.com/3M/en_US/company-us/' },
    {id: 4, name: 'Land O\' Lakes',  icon: require('./images/landolake.jpg'), link: 'https://www.landolakesinc.com/'},
    {id: 5, name: 'Renewal By Andersen', icon: require('./images/renew.jpg'), link: 'https://www.renewalbyandersen.com/'},
    {id: 6, name: 'Plaza TV & Appliance', icon: require('./images/plaza.jpg'), link: 'http://www.plazatv.com/'},
    {id: 7, name: 'United Parcel Service', icon: require('./images/ups.png'), link: 'https://www.ups.com/'},
    {id: 8, name: 'Saint Paul RiverCentre', icon: require('./images/rivercentre.jpg'), link: 'http://www.rivercentre.org/'},
    {id: 9, name: 'Green Card Voices', icon: require('./images/greencard.jpg'), link: 'http://www.greencardvoices.com/'},
    {id: 10, name: 'Job Corps', icon: require('./images/jobcorps.jpg'), link: 'https://www.jobcorps.gov/'},
    {id: 11, name: 'Peace Corps', icon: require('./images/peace.jpg'), link: 'https://www.peacecorps.gov/'},
    {id: 12, name: 'Immigration History Research Center', icon: require('./images/ihrc.jpg'), link: 'https://cla.umn.edu/ihrc'},
    {id: 13, name: 'Lighthouse Software', icon: require('./images/lighthouse.png'), link: 'http://lighthousesoftware.com/'}

];

class PartnerList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }


    handleOnPress = (item) => {
        Linking.openURL(item.link).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                data={PARTNERS}
                renderItem={({ item }) => 
                        <ListItem
                        leftAvatar={ <Avatar avatarStyle={{resizeMode: 'contain', backgroundColor:'white'}} small source={item.icon} />}
                        title={`${item.name}`}
                        onPress={() => this.handleOnPress(item)}
                        bottomDivider={true}
                        />
                    } 
                keyExtractor={item => item.id}
                />
            </View>

        );
    }
}

export default PartnerList;