import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { EStyleSheet } from 'react-native-extended-stylesheet';
import { HeaderDetailAccordian }  from '../components/HeaderDetailAccordian';
import { Container } from '../components/Container';

const SECTIONS = [
    { title: 'Hours',
    contentItems: [ 
        { header: 'General Public Hours',
          body: 
          `
    Friday, May 4, 2018
      4:30 p.m. – 10:00 p.m.
    Saturday, May 5, 2018
      10:00 a.m. – 10:00 p.m.
    Sunday, May 6, 2018
      10:00 a.m. – 6:00 p.m.`
      },
        { header: `    
Student Hours'`, 
          body:`
    Thursday, May 3, 2018
      9:00 a.m. – 3:00 p.m.
    Friday, May 4, 2018
      9:30 a.m. – 4:30 p.m.
        
'STUDENT HOURS ARE NOT OPEN TO THE GENERAL PUBLIC.`
      }            
    ]
  }, 
    { title: 'Transportation',
      contentItems: [
          { header: '', 
            body: 'Ride any Metro Transit vehicle to the Saint Paul RiverCentre (175 Kellogg Boulevard West, ' +
                 'St. Paul, MN 55102) for FREE! Metro Transit passes will be available for every Festival day (Thursday through Sunday). '+
                 'Hours of operation are one hour before the Festival and FON and one hour after it closes.'
      }
    ]
                 
    },
    { title: 'Parking',
      contentItems: [{ header: '', body: 'Info pending'}] 
    },
  ];

class Faq extends Component {


    render() {
    
        return (
            <Container style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <HeaderDetailAccordian sections={SECTIONS} />

            </Container>
        );
    }

}

export default Faq;