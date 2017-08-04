import { StackNavigator } from 'react-navigation';
import TabBarContainer from '../containers/TabBarContainer' //containner
import Intro from '../components/IntroScreen';
import * as globalStyles from '../styles/global';

const routeConfiguration = {
    Intro: { screen: Intro },
    Home:  { screen: TabBarContainer },
};

const stackNavigatorConfigusration = {
    initialRouteName: 'Intro',
    headerMode: 'screen',
    navigationOptions: {
      title: 'Intro',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: globalStyles.BG_COLOR,
        elevation: null
      },
    }
};

export default (state = initialState, action = {}) => {
  alert('toanf');
  if (action.type === NAVIGATION_OPEN_MODAL) {
    alert('toan');
    return state;
    // const homeState = StateUtils.get(state, 'home');
    // const openTabState = homeState.routes[homeState.index];
    // const updatedTabState = { ...openTabState, modal: action.payload };
    // const updatedHomeState = StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
    // return StateUtils.replaceAt(state, 'home', updatedHomeState);
  } else if (action.type === NAVIGATION_CLOSE_MODAL) {
    // const homeState = StateUtils.get(state, 'home');
    // const openTabState = homeState.routes[homeState.index];
    // const updatedTabState = { ...openTabState, modal: undefined };
    // const updatedHomeState = StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
    // return StateUtils.replaceAt(state, 'home', updatedHomeState);
  }
  return state;
};

export const RootNav = StackNavigator(routeConfiguration, stackNavigatorConfigusration);
