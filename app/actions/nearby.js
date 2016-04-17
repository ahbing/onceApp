import {SHOW_NEARBY} from '../constant';


const showNearby = () => {
  return {
    type: SHOW_NEARBY,
    // 通过网络请求拿到 data
    data: [
      {
        x: 22,
        y: 22,
        id: 111,
      },{
        x: 44,
        y: 44,
        id: 222
      },{
        x: 88,
        y: 120,
        id: 333
      }
    ]
  }
};

export default {
  showNearby
}
