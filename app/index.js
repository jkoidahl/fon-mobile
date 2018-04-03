import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryTextColor: 'white',
  $primaryIconColor: 'white',
  $primaryOrange: '#F46036',
  $primaryPurple: '#372248',
  $primaryBrown: '#564946',
  $secondaryTextColor: '#4F6D7A',
});



export default () => (<Provider store={store}><Navigator onNavigationStateChange={null} /></Provider>  );