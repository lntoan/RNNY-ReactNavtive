import { BOOKMARK, LOADED_BOOKMARKS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  console.log('anh toan dep trai');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case LOADED_BOOKMARKS:
      return action.payload;
    case BOOKMARK:
      return [...state, action.payload];
    default:
      return state;
  }
};
