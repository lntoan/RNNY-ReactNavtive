import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';
import bookmarkReducer from './reducers/bookmarkReducer';
import { RootNav } from './reducers/navigationReducer';
import { TabBar, tabBarReducer } from './config/TabBarConfiguration'

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      bookmarks: bookmarkReducer,
      tabBar: tabBarReducer,
      nav: (state, action) => RootNav.router.getStateForAction(action, state)
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
