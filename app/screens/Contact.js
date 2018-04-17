import React, { Component } from 'react';

import { Container } from '../components/Container';
import { SimpleDetail } from '../components/SimpleDetail';

const text = `The Festival Of Nations is presented by the International Institute of Minnesota. For general information about the Festival Of Nations please send an email inqueries to info@festivalofnations.com

For information regarding school and group orders, curriculum or recertification, please contact the Education Outreach Coordinator at 651-647-191 Ext:306 or by email at schools@festivalofnations.com

For inquiries regarding specifc Festival of Nations areas and activities, please refer to the following contact information:

International Cafes: cafes@festivalofnations.com
General Entertainment: entertainment@festivalofnations.com
World Stage, Adult Dance: worldstage@festivalofnations.com
International Marketplace & Bazaar: bazaar@festivalofnations.com
Cultural Exhibits: exhibits@festivalofnations.com
Ethic Demonstrations: demos@festivalofnations.com

For media inquiries contact Connie Shaver`;


class Contact extends Component {
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

export default Contact;