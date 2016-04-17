import {SHOW_ROOMS, JOIN_ROOM, RM_ROOM} from '../constant';

// 相关的 data xuyao cing
const showRooms = () => {
  return {
    type: SHOW_ROOMS,
    data: [
      {
        roomId: 0,
        userId: 222
      },{
        roomId:1,
        userId:333
      }
    ]
  }
};

const joinRoom = () => {
  return {
    type: ADD_ROOM,
    data: {
      roomId: 2,
      userId: 666
    }
  }
};

const rmRoom = () => {
  return {
    type: RM_ROOM,
    data: {
      roomId: 1,
      userId: 333
    }
  }
};

export default {
  showRooms,
  joinRoom,
  rmRoom
}
