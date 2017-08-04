//import { NavigationExperimental } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen';

import { tab } from '../actions/navigationActions';

import * as NavigationExperimental from 'react-navigation';

const mapStateToProps = (state) => {
  const homeState = NavigationExperimental.StateUtils.get(state.navigation, 'home');
  return {
    selectedTab: homeState ? homeState.routes[homeState.index].key : 'newsFeed'
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    tab
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
