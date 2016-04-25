import React, {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
  Navigator,
  PropTypes
} from 'react-native';

import {connect} from 'react-redux';

import Rooms from '../components/rooms';
import BottomBar from '../components/tab/BottomBar';

class RoomsContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {navigator, dispatch} = this.props;
    return (
      <View>
        <Rooms navigator={navigator} dispatch={dispatch}/>
        <BottomBar navigator={navigator} dispatch={dispatch} />
      </View>
    )
  }
}

RoomsContainer.propTypes = {
  usersByUserId: PropTypes.object,
  roomsByUserId: PropTypes.object
};

function mapStateToProps(state) {
  const {usersByUserId, roomsByUserId} = state;
  return {
    usersByUserId,
    roomsByUserId
  }
}

export default connect(mapStateToProps)(RoomsContainer);
