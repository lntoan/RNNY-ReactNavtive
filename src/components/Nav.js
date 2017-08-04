import React,{Component} from 'react';
import PropTypes from 'prop-types';
import * as globalStyles from '../styles/global';
import { StyleSheet } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { RootNav } from '../reducers/navigationReducer';

export default class Nav extends Component {

  render() {
        const { dispatch, navigationState } = this.props;
        return (
            <RootNav
                navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigationState,
                    })
                }
            />
        );
    }
}

const styles = StyleSheet.create({
  cardStack: {
    flex: 1
  },
  navigationBar: {
    backgroundColor: globalStyles.MUTED_COLOR
  }
});
