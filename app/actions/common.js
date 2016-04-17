import {SHOW_ERROR, SHOW_PENDING, CHANGE_TAB} from '../constant';

const showError = () => {
  return {
    type: SHOW_ERROR,
    data: {
      msg: 'get some wrong'
    }
  }
};

const showPending = ()=>{
  return {
    type: SHOW_PENDING,
    data: {
      msg: 'pending...'
    }
  }
};

const changeTab = (tab) => {
  return {
    type: CHANGE_TAB,
    data: tab
  }
};

export default {
  showError,
  showPending,
  changeTab
}




