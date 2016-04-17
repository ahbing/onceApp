import {CHAT_USER, SEND_MSG, GET_MSG} from '../constant';

const chatUser = () => {
  return {
    type: CHAT_USER,
    data: {
      roomId: 0,
      userId: 222
    }
  }
};

const sendMsg = () => {
  return {
    type: SEND_MSG,
    data: {
      text: 'say hello to the world',
      roomId:111,
      senderId: 1112,
      targetId: 21313
    }
  }
};

const getMsg = () => {
  return {
    type: GET_MSG,
    data: {
      text: 'someone say hi to me!',
      roomId:111,
      senderId: 1112,
      targetId: 21313
    }
  }
};

export default {
  chatUser,
  sendMsg,
  getMsg
}
