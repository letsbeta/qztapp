import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {Icon} from "native-base";

import { ServiceScreen } from './js/ServiceScreen'
import { TabScreenStack } from './js/TabsHome'
import config from './config.json'

const StackNavigatorConfig = {
  navigationOptions: {
    headerTintColor: config.headerTextColor,
    headerStyle: {backgroundColor: config.headerBgColor},
  }
}

export const SimpleApp = StackNavigator({
    Home: { screen: TabScreenStack , 
            navigationOptions: ({navigation}) => ({
              title: config.title,
              headerRight: (<Icon ios="ios-add" android="md-add"
                  style={{color: config.headerTextColor, marginRight: 10}}
                  onPress={() => navigation.navigate('Service')}/>)
            })
    },
    Service: { screen: ServiceScreen,
            navigationOptions: ({navigation}) => ({
              title: "高级功能"
            }) }
  },
  StackNavigatorConfig
);

