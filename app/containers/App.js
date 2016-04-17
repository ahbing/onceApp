import React, {
  View,
  Text,
  PropTypes,
  Navigator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import roomAction from '../actions/room';
import roomsAction from '../actions/room';
import nearbyAction from '../actions/nearby';
import commonAction from '../actions/common';

import Nearby from './Nearby';
import Room from './Room';
import Rooms from './Rooms';

class App extends React.Component{
  render(){
    const {common, room, rooms, nearby, roomAction, roomsAction, nearbyAction} = this.props;
    const {tab} = common;
    return(
      <View>
        {tab === 'nearby' &&
          <Nearby common={common} nearby={nearby} actions={nearbyAction} />
        }
        {
          tab === 'rooms' &&
            <Rooms common={common} rooms = {rooms} actions = {roomsAction}/>
        }
        {
          tab === 'room' &&
            <Room common={common} room={room} actions = {roomAction}/>
        }
      </View>
    );
  }
}

App.propTypes = {
  nearby: PropTypes.object,
  room: PropTypes.object,
  rooms: PropTypes.object,
  common: PropTypes.object,
  roomAction: PropTypes.object,
  roomsAction: PropTypes.object,
  nearbyAction: PropTypes.object
};

export default connect(state=>{
  console.log('APP STATE', state);
  return {
    common: state.common,
    room: state.room,
    nearby: state.nearby,
    rooms: state.rooms
  }
},dispatch=>{
  return {
    nearbyAction: bindActionCreators(Object.assign({}, nearbyAction, commonAction), dispatch),
    roomAction: bindActionCreators(Object.assign({}, roomAction, commonAction), dispatch),
    roomsAction: bindActionCreators(Object.assign({}, roomsAction, commonAction), dispatch)
  }
})(App)
