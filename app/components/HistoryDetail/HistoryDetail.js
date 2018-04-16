import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import styles from './styles';

class HistoryDetail extends Component {
    static propTypes = {
         data: PropTypes.array,
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={ require('./images/fon-logo.png')}></Image> 
                    <Text style={styles.header}>Story</Text>
                    <Text style={styles.detail}>
                    The International Institute’s annual Festival of Nations is the most diverse, oldest and longest running multicultural festival in the Midwest. Since 1932, its goal has been to inspire people to discover more about our world and embrace the rich cultural diversity in our community. Nearly 100 ethnic groups will come together for a unique, 4-day experience that celebrates cultural heritage through dancing, performances, exhibits, demonstrations and cuisine. The Festival is a department of the International Institute of Minnesota, whose mission is to “help New Americans achieve self-sufficiency and full membership in American life.”
As the Minnesota cultural landscape expands to include more immigrants, our community benefits culturally and economically. By providing a platform to showcase diversity and a stage for new artists we share and document this most precious heritage. The Festival evolves each year by welcoming new ethnic groups and by offering programming that reflects the cultural fluidity of our community.
                    </Text>
                </View>
            </View>
    );}
}


export default HistoryDetail;