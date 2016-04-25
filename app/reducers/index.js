// import all reducer and combine Reducers

import usersByUserId from './nearby';
import room from './room';
import roomsByUserId from './rooms';
import common from './common';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  usersByUserId,
  room,
  roomsByUserId,
  common
});


export default rootReducers;
