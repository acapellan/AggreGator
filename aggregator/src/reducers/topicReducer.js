import { FETCH_TOPIC } from '../actions/types';

export default function topicReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TOPIC:
      return action.payload;
    default:
      return state;
  }
}
