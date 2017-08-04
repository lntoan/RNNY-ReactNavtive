import {
  NAVIGATION_PUSH,
  NAVIGATION_POP,
  NAVIGATION_TAB,
  NAVIGATION_OPEN_MODAL,
  NAVIGATION_CLOSE_MODAL
} from '../actions/actionTypes';

import { RootNav } from '../config/navigationConfiguration';

// export default (state, action = {}) => {
//   if (action.type === NAVIGATION_PUSH) {
//     return NavigationExperimental.StateUtils.push(state, routes[action.payload]);
//   } else if (action.type === NAVIGATION_POP) {
//     return NavigationExperimental.StateUtils.pop(state);
//   } else if (action.type === NAVIGATION_TAB) {
//     // const homeState = NavigationExperimental.StateUtils.get(state, 'home');
//     // const updatedHomeState = NavigationExperimental.StateUtils.jumpTo(homeState, action.payload);
//     // return NavigationExperimental.StateUtils.replaceAt(state, 'home', updatedHomeState);
//   } else if (action.type === NAVIGATION_OPEN_MODAL) {
//     // const homeState = NavigationExperimental.StateUtils.get(state, 'home');
//     // const openTabState = homeState.routes[homeState.index];
//     // const updatedTabState = { ...openTabState, modal: action.payload };
//     // const updatedHomeState = NavigationExperimental.StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
//     // return NavigationExperimental.StateUtils.replaceAt(state, 'home', updatedHomeState);
//   } else if (action.type === NAVIGATION_CLOSE_MODAL) {
//     // const homeState = NavigationExperimental.StateUtils.get(state, 'home');
//     // const openTabState = homeState.routes[homeState.index];
//     // const updatedTabState = { ...openTabState, modal: undefined };
//     // const updatedHomeState = NavigationExperimental.StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
//     // return NavigationExperimental.StateUtils.replaceAt(state, 'home', updatedHomeState);
//   }
//   return state;
// };
