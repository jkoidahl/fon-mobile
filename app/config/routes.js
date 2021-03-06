import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

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
import FoodDetail from '../screens/FoodDetail';
import Shop from '../screens/Shop';
import ShopDetail from '../screens/ShopDetail';
import Partners from '../screens/Partners';
import PartnerDetail from '../screens/PartnerDetail';
import Exhibits from '../screens/Exhibits';
import Explore from '../screens/Explore';
import Bazaars from '../screens/Bazaars';
import Demos from '../screens/Demos';
import Activities from '../screens/Activities'; 

const ExploreStack = new StackNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            headerTitle: 'Explore'
        },
    },
    Exhibits: {
        screen: Exhibits,
        navigationOptions: {
            headerTitle: 'Exhibits'
        }
    },
    Activities: {
        screen: Activities,
        navigationOptions: {
            headerTitle: 'Activities'
        },
    }, 
    Demos: {
        screen: Demos,
        navigationOptions: {
            headerTitle: 'Demos'
        }
    }
}, { headerMode: 'none'});

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

const FoodStack = new StackNavigator({
    Food: {
        screen: Food,
        navigationOptions: {
            headerTitle: 'Food'
        }
    },
    FoodDetail: {
        screen: FoodDetail,
    }
}, { headerMode: 'none'});

const ShopStack = new StackNavigator({
    Shop: {
        screen: Shop,
        navigationOptions: {
            headerTitle: 'Shop'
        }
    },
    ShopDetail: {
        screen: ShopDetail,
    }
}, { headerMode : 'none'});

const PartnerStack = new StackNavigator({
    Partners: {
        screen: Partners,
        navigationOptions: {
            headerTitle: 'Sponsors & Partners'
        }
    },
    PartnerDetail: {
        screen: PartnerDetail,
    }
}, { headerMode : 'none'});


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
            screen: FoodStack,
        },
        Info: {
            screen: InfoStack,
        },
        Shop: {
            screen: ShopStack,
        },
        Partners: {
            screen: PartnerStack,
        }, 
        Social: {
            screen: Social,
            navigationOptions: {
                headerTitle: 'Social',
            }
        },
        Donate: {
            screen: Donate,
            navigationOptions: {
                headerTitle: 'Donate',
            }
        },
        Explore: {
            screen: ExploreStack,
        },
    },{
        mode: 'screen',
        headerMode: 'screen',
        cardStyle: { paddingTop: StatusBar.currentHeight },
    }

);