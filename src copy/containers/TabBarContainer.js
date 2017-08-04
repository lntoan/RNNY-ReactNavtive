'use strict'

import React from 'react'
import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from '../config/TabBarConfiguration'
import { connect } from 'react-redux'



const mapStateToProps = (state) => { // in reducer
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component { // this is NAV Component

  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    tintColor: 'red'
  });

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation) // in reducer
