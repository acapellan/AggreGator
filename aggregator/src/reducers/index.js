import { combineReducers } from 'redux';

import authReducer from './authReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({
  auth: authReducer,
  topics: topicsReducer
});
