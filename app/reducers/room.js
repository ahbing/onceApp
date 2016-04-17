import {CHAT_USER, SEND_MSG, GET_MSG} from '../constant';

const initialState = {
  msg:[
    {roomId:0, sender:0, target:1, text:'hello world'},
    {roomId:1, sender:1, target:0, text:'goodbye world'}
  ]
};

const chatReducer = (state = initialState, action = {}) => {
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


export default chatReducer;
