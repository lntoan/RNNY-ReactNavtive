import React from 'react';
import { Provider } from 'react-redux';
import NavContainer from './containers/NavContainer';
//import NavContainer from './containers/HomeScreenContainer'; //chua chay duoc vi dung cai NavigationExperimental
// import HomeScreen from './components/HomeScreen';
import createStore from './createStore';

const store = createStore();

//console.ignoredYellowBox = ['Remote debugger'];

export default () => (
  <Provider store={store}>
    <NavContainer />
      {/* <HomeScreen /> */}
  </Provider>
);
