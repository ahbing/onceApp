import {REQUEST_NEARBY, RECEIVE_NEARBY, INVALIDATE_NEARBY} from '../constant';

import mocks from '../mocks';

function requestNearby(userId) {
  console.log('requestNearby userId', userId);
  return {
    type: REQUEST_NEARBY,
    userId,
  }
}

function invalidateNearby(userId) {
  return {
    type: INVALIDATE_NEARBY,
    userId
  }
}

function receviceNearby(userId, users) {
  console.log('RECEIVE_NEARBY userId users', userId, users);
  return {
    type: RECEIVE_NEARBY,
    userId,
    users: users,
    receivedAt: Date.now()
  }
}

function fetchNearby(userId) {
  return dispatch => {
    dispatch(requestNearby(userId));
    // return fetch(`http://apti.com/user/userId`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receviceNearby(userId, json)))
    return dispatch(receviceNearby(userId, mocks.users));
  }
};

function shouldFetchNearby(state, userId){
  const users = state.usersByUserId[userId];
  console.log('users', users);
  if(!users) {
    return true;
  }
  if(users.isFetching){
    return false;
  }
  return users.didInvalidate;
}

export default function fetchNearbyIfNeeded(userId) {
  return (dispatch, getState) => {
    if(shouldFetchNearby(getState(), userId)){
      return dispatch(fetchNearby(userId));
    }
  }
}
