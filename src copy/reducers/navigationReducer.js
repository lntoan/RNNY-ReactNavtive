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

export const RootNav = StackNavigator(routeConfiguration, stackNavigatorConfigusration);
