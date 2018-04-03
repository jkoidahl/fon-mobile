import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Food from '../screens/Food';
import Maps from '../screens/Maps';
import MapFull from '../screens/MapFull';
import GoogleMap from '../screens/GoogleMap';
import Info from '../screens/Info';
import Faq from '../screens/Faq';
import History from '../screens/History';
import Contact from '../screens/Contact';
import Tickets from '../screens/Tickets';
import Social from '../screens/Social';
import Donate from '../screens/Donate';


const MapStack = new StackNavigator({
    Maps: {
        screen: Maps,
        navigationOptions: {
            headerTitle: 'Maps',
        }
    },
    GoogleMap: {
        screen: GoogleMap,
        navigationOptions: {
            headerTitle: 'Directions',
        }
    },
    Map: {
        screen: MapFull,
    }
}, 
{ headerMode: 'none'}
);

const InfoStack = new StackNavigator({
    Info: { 
        screen: Info,
        navigationOptions: {
            headerTitle: 'Festival Info'
        }
    },
    Faq: {
        screen: Faq, 
        navigationOptions: {
            headerTitle: 'FAQs'
        }
    },
    History: {
        screen: History,
        navigationOptions: {
            headerTitle: 'History'
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            headerTitle: 'Contact Us'
        }
    },
    Tickets: {
        screen: Tickets,
        navigationOptions: {
            headerTitle: 'Tickets'
        }
    }
}, { headerMode: 'none' } );

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: () => null}
        },
        Maps: {
            screen: MapStack,
        },
        Schedule: {
            screen: Schedule,      
            navigationOptions: {
                headerTitle: 'Schedule',
              },
        },
        Food: {
            screen: Food,
            navigationOptions: {
                headerTitle: 'Food',
            }
        },
        Info: {
            screen: InfoStack,
        },
        Social: {
            screen: Social,
            navigationOptions: {
                headerTitle: 'News/Social',
            }
        },
        Donate: {
            screen: Donate,
            navigationOptions: {
                headerTitle: 'Donate',
            }
        },
    },{
        headerMode: 'screen',
    }

);