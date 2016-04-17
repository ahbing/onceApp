// import all reducer and combine Reducers

import nearby from './nearby';
import room from './room';
import rooms from './rooms';
import common from './common';

import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  nearby,
  room,
  rooms,
  common
});


export default rootReducers;
