import {CREATE_ROOM, REQUEST_ROOM, SEND_MSG, GET_MSG, CHANGE_ROOM} from '../constant';

const room = (state = {}, action) => {
  switch (action.type){
    case SEND_MSG:
      // 处理发送消息 返回更新的 state
      Array.prototype.push.apply(state, action.data);
      return state;
    case GET_MSG:
      Array.prototype.push.apply(state, action.data);
      return state;
    default:
      return state
  }
};


export default room;
