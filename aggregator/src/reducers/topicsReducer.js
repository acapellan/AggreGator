import { FETCH_TOPICS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return action.payload;
    default:
      return state;
  }
}
