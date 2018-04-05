import React, { Component } from 'react';
import { PartnerList } from '../components/PartnerList';

const PARTNERS = [
    {id: 1, name: 'International Institute Of MN', description: `af am wares 
        afiou aiudfa fdja dfaldks fjkalaf
        dafdfadf ad 
        adfadsfads fdfswe few 
         few fwe feoijgpioregp qgeg qerg qgfdojadf we 
         adfsd fwe wef we `, icon:''},
];

class Partners extends Component {

    render() {
        return (
            <PartnerList data={PARTNERS} navigation={this.props.navigation}/>
        );
    }
}   

export default Partners;