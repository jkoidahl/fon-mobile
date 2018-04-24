import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  // $primaryBlue: '#4F6D7A',
  // $primaryTextColor: 'white',
  // $primaryIconColor: 'white',
  // $primaryOrange: '#F46036',
  // $primaryPurple: '#372248',
  // $secondaryTextColor: '#4F6D7A',

  $primaryBlue: '#337ab7',
  $primaryTextColor: 'white',
  $primaryIconColor: 'white',
  $primaryOrange: '#fa824c',
  $primaryPurple: '#a2d729',
  $secondaryTextColor: '#2b2c28',

  // $primaryBlue: '#337ab7',
  // $primaryTextColor: 'white',
  // $primaryIconColor: 'white',
  // $primaryOrange: '#fb4d3d',
  // $primaryPurple: '#03cea4',
  // $secondaryTextColor: '#337ab7',



});



export default () => (<Provider store={store}><Navigator onNavigationStateChange={null} /></Provider>  );