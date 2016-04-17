import {CHANGE_TAB, SHOW_PENDING, SHOW_ERROR} from '../constant';

const initiState = {
  tab: 'nearby',
  //navigator: 'nearbyIndex',
  isError: false,
  isPending: false
};

const commonReducer = (state = initiState, action = {}) => {
  switch (action.type){
    case CHANGE_TAB:
      return Object.assign({},{...state},{
        tab: action.data,
        navigator: action.data+'Index',
        isError: false,
        isPending: false});
    case SHOW_PENDING:
      return Object.assign({},{...state},{
        tab: action.data,
        navigator: action.data+'Index',
        isError: false,
        isPending: true});
    case SHOW_ERROR:
      return Object.assign({},{...state},{
        tab: action.data,
        navigator: action.data+'Index',
        isError: true,
        isPending: false});
    default:
      return state;
  }
};

export default commonReducer;
