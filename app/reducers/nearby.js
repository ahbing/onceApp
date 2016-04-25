import {REQUEST_NEARBY, RECEIVE_NEARBY, INVALIDATE_NEARBY} from '../constant';

const nearby = (state = {
  isFetching: false,
  didInvalidate: false,
  users: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_NEARBY:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_NEARBY:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true
      });
    case RECEIVE_NEARBY:
      return Object.assign({}, state , {
        isFetching: false,
        didInvalidate: false,
        receivedAt: action.receivedAt,
        users: action.users
      });
    default:
      return state;
  }
};

function usersByUserId(state={}, action) {
  switch(action.type){
    case INVALIDATE_NEARBY:
    case REQUEST_NEARBY:
    case RECEIVE_NEARBY:
      return Object.assign({}, state, {
        [action.userId]: nearby(state[action.userId], action)
      })
    default:
      return state;
  }
}

export default usersByUserId;
