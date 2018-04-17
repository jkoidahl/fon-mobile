import React, { Component } from 'react';

import { Container } from '../components/Container';
import { SimpleDetail } from '../components/SimpleDetail';

const text = `
With Your Generous Donations, The International Institute Of Minnesota Provides New Americans Strong Support For The Beginning Of A New Life In Minnesota. Visit Www.Iimn.Org For More Information.
 

Giving by Mail: Please make checks payable to the ‘International Institute of Minnesota’ and mail to: International Institute 1694 Como Ave. Saint Paul, MN 55108

You may designate your giving for:

Where the need is greatest
Festival of Nations
Refugee resettlement
Medical Careers Program
Hospitality Careers Pathway
English for Work Program
Immigration & Citizenship
Current highest funding needs: Refugee Resettlement.

The International Institute of Minnesota is a 501(c)3 organization, and all donations are tax-deductible to the extent allowed by law.`;

class Donate extends Component {
    render() {
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <SimpleDetail text={text}></SimpleDetail>
            </Container>
        );
    }

}

export default Donate;