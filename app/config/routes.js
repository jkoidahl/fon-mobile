import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Food from '../screens/Food';
import Maps from '../screens/Maps';
import MapFull from '../screens/MapFull';
import GoogleMap from '../screens/GoogleMap';


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
    },{
        headerMode: 'screen',
    }

);