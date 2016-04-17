import {SHOW_ROOMS, JOIN_ROOM, RM_ROOM} from '../constant';

const initialState = {
  //rooms:[
  //  {roomId:0, hoster:0,user:121},
  //  {roomId:1, hoster:1, user:231}
  //]
};

const roomReducer = (state = initialState, action = {}) => {
  switch (action.type){
    case SHOW_ROOMS:
      return action.data;
    case JOIN_ROOM:
      return console.log('更新房间的 state, 并返回');
    case RM_ROOM:
      const roomId = action.roomId;
      state.room.filter(item => {item.roomId !== roomId});
      return state;
    default:
      return state;
  }
};

export default roomReducer;
