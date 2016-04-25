import {INVALIDATE_ROOMS, REQUEST_ROOMS, RECEIVE_ROOMS} from '../constant';

//const initialState = {
//  rooms:[
//    {roomId:0, hoster:0,user:121},
//    {roomId:1, hoster:1, user:231}
//  ]
//};

const rooms = (state={
  isFetching: false,
  didInvalidate: false,
  rooms: []
}, action) => {
  switch (action.type){
    case INVALIDATE_ROOMS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_ROOMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_ROOMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        rooms: action.rooms
      });
    default:
      return state;
  }
};

const roomsByUserId = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_ROOMS:
    case REQUEST_ROOMS:
    case RECEIVE_ROOMS:
      return Object.assign({}, state, {
        [action.userId]: rooms(state[action.userId], action)
      })
    default:
      return state;
  }
}


export default roomsByUserId;
