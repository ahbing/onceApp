import {SHOW_NEARBY} from '../constant';

const initialState = {
  users:[
    { x:11, y:11 , id:1},
    { x:22, y:22, id:22},
  ]
};



const nearbyReducer = (state = initialState, action = {}) => {
  switch (action.type){
    case SHOW_NEARBY:
      return Object.assign({}, {...state}, {
        users: action.data
      });
    default:
      return state;
  }
};

export default nearbyReducer;
