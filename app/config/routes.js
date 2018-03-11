import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';


export default StackNavigator(
    {
        Home: {
            screen: Home, 
            navigationOptions: {
                header: () => null,
           },
        },
        Schedule: {
            screen: Schedule,      
            navigationOptions: {
                headerTitle: 'Schedule',
              },
        },
    },

);