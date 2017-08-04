import React from 'react';
import { Provider } from 'react-redux';
import NavContainer from './containers/NavContainer';
import createStore from './createStore';
//import Perf from 'react-addons-perf';
// //
// window.Perf = Perf;

const store = createStore();
console.ignoredYellowBox = ['Remote debugger'];

export default () => (
  <Provider store={store}>
    <NavContainer />
  </Provider>
);
