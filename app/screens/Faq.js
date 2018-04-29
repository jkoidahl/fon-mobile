import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { EStyleSheet } from 'react-native-extended-stylesheet';
import { HeaderDetailAccordian }  from '../components/HeaderDetailAccordian';
import { Container } from '../components/Container';

const SECTIONS = [
    { title: 'Hours',
    contentItems: [ 
        { id: 4, header: 'General Public Hours',
          body: 
          `
    Friday, May 4, 2018
      4:30 p.m. – 10:00 p.m.
    Saturday, May 5, 2018
      10:00 a.m. – 10:00 p.m.
    Sunday, May 6, 2018
      10:00 a.m. – 6:00 p.m.`
      },
        { id: 5, header: `Student Hours`, 
          body:`
    Thursday, May 3, 2018
      9:00 a.m. – 3:00 p.m.
    Friday, May 4, 2018
      9:30 a.m. – 4:30 p.m.
        
STUDENT HOURS ARE NOT OPEN TO THE GENERAL PUBLIC`
      }            
    ]
  }, 
    { title: 'Transportation',
      contentItems: [
          { id: 2, header: '', 
            url: 'http://www.festivalofnations.com/transportation', urlText: 'Free Metro Transit Pass Link',
            body: 'Ride any Metro Transit vehicle to the Saint Paul RiverCentre (175 Kellogg Boulevard West,St. Paul, MN 55102) for FREE! Metro Transit passes will be available for every Festival day (Thursday through Sunday). Hours of operation are one hour before the Festival and FON and one hour after it closes. \n\n'
      }
    ]
                 
    },
    { title: 'Parking',
      contentItems: [{ id: 1, header: '', 
      body: `Ryan Lot - $7.00 for 12 hours (149 total stalls)
  217 Chestnut Street Saint Paul, MN 55102
      
  Wax Works Lot - $7.00 for 12 hours (74 total stalls)
  177 Exchange Street Saint Paul, MN 55102
  
  Smith Avenue Transit Center - $10.00 for 12 hours (603 total stalls)
  145 Smith Avenue Saint Paul, MN 55102
  
  Seven Corners Lot - $15.00 for 12 hours (284 total stalls)
  150 Smith Avenue Saint Paul, MN 55102
  
  SAINT PAUL RIVERCENTRE PARKING RAMP - $10.00 for 12 hours (Inside Lot)
  150 West Kellogg Blvd. Saint Paul, MN 55102
  There are 48 designated public parking spaces designated for vehicles displaying disability parking placards/permits or license tags in the RiverCentre Parking Ramp. Ten of these spaces are van accessible.  Once parked, guests should take the elevators on the west side of the parking ramp to the skyway level directly into Saint Paul RiverCentre and Roy Wilkins Auditorium.
  
  KELLOGG PARKING RAMP $10.00 for 12 hours (Inside Lot)
  129 West Kellogg Blvd. Saint Paul, MN 55102
  There are 13 designated public parking spaces designated for vehicles displaying disability parking placards/permits or license tags in the Kellogg Parking Ramp.  Six of these spaces are van accessible.  Once parked, guests should take the elevator to the lobby level (level 2), which will bring guests directly into Saint Paul RiverCentre and Roy Wilkins Auditorium.
      `}] 
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