import {REQUEST_ROOM, SEND_MSG, GET_MSG, CREATE_ROOM, RM_ROOM, CHANGE_ROOM} from '../constant';

// 从 list 列表点击进入
export function changeRoom(roomId){
  return {
    type:CHANGE_ROOM,
    roomId
  }
}

export function rmRoom(roomId){
  return {
    type: RM_ROOM,
    roomId
  }
}


export function createRoom(){
  return {
    type: CREATE_ROOM
  }
}

// 点击地图上面 用户的点
// 还要添加描述
// post 请求创建一个 room
export function postRoom(hosterId, userId){
  return dispatch => {
    // 这里 fetch 的 api 具体实现还要回去看一下
    dispatch(createRoom());
    return fetch(`http://api.once.com/hosterId/${hosterId}/userId/${userId}`)
      .then(response => dispatch(changeRoom(response)))
  }
}

function postdMsg(roomId, senderId, text){
  return dispatch => {
    return fetch(`http://api.once.com/sendMsg`, {
      method: 'post',
      body: JSON.stringify({roomId:roomId, senderId: senderId, text:text})
    })
  }
}

