import {REQUEST_ROOMS, RECEIVE_ROOMS, INVALIDATE_ROOMS} from '../constant';

const rmRoom = (roomId) => {
  return {
    type: RM_ROOM,
    roomId
  }
};

function invalidateRooms(userId) {
  return {
    type: INVALIDATE_ROOMS,
    userId
  }
}

function requestRooms(userId){
  return {
    type: REQUEST_ROOMS,
    userId
  }
}

function receiveRooms(userId, rooms) {
  return {
    type: RECEIVE_ROOMS,
    userId: userId,
    rooms: rooms,
    receiveAt: Date.now()
  }
}

function fetchRooms(userId) {
  return dispatch => {
    dispatch(requestRooms(userId));
    // return fetch(`http://apt.once.com/userId/userId/rooms`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveRooms(userId, json)))
    return dispatch(receiveRooms(1, rooms))
  }
}

function shouldFetchRooms(state, userId) {
  const rooms = state.roomsByUserId[userId];
  if(!rooms){
    return true;
  }

  if(rooms.isFetching){
    return false;
  }

  return rooms.didInvalidate
}

export function fetchRoomsIfNeeded(userId) {
  return (dispatch, getState) => {
    if(shouldFetchRooms(getState(), userId)){
      return dispatch(fetchRooms(userId))
    }
  }
}
