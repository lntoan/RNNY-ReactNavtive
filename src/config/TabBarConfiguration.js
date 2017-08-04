'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import BookmarksContainer from '../containers/BookmarksContainer';
import Profile from '../components/Profile';
import * as globalStyles from '../styles/global';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

const routeConfiguration = {
  News: { screen: NewsFeedContainer }, // component
  Search: { screen: SearchContainer }, // component
  //Bookmarks: { screen: BookmarksContainer }, // component
  Profile: {screen: Profile }
}

const tabBarConfiguration = {
  tabBarOptions:{
      activeTintColor: globalStyles.LINK_COLOR,//'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: globalStyles.BAR_COLOR,
      inactiveBackgroundColor: globalStyles.BG_COLOR,
      lazyLoad: true, // render the tabs lazily
      tabBarPosition: 'bottom', // where are the tabs shown
      backBehavior: 'none', // back button doesn't take you to the initial tab
      labelStyle: {
        fontSize: 12,
      },
      showIcon: true
    }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  return TabBar.router.getStateForAction(action,state);
}
