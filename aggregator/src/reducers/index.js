import { combineReducers } from 'redux';

import authReducer from './authReducer';
import topicsReducer from './topicsReducer';
import topicReducer from './topicReducer';

export default combineReducers({
  auth: authReducer,
  topics: topicsReducer,
  topic: topicReducer
});
