import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './js/Home';
import PlusScreen from './js/PlusHome'

export default class App extends Component {
  render() {
    return (
      <MainScreen />
      );
  }
}

export const SimpleApp = StackNavigator({
    Home: { screen: MainScreen },
    PlusHome: { screen: PlusScreen }
});

