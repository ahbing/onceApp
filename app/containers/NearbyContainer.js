import React, {
  View,
  Text,
  PropTypes,
  Navigator
} from 'react-native';

import {connect} from 'react-redux';

import Near from '../components/near';
import BottomBar from '../components/tab/BottomBar';
import fetchNearbyIfNeeded from '../actions/nearby';

class Nearby extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const { dispatch, userId } = this.props
    dispatch(fetchNearbyIfNeeded(userId));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.usersByUserId){
      return
    }
  }

  render (){
    const {navigator, dispatch} = this.props;
    return (
      <View>
        <Near {...this.props}/>
        <BottomBar navigator={navigator} dispatch={dispatch} />
      </View>
    )
  }
}

Nearby.propTypes = {
  usersByUserId: PropTypes.object,
  roomsByUserId: PropTypes.object
};

function mapStateToProps(state) {
  const {usersByUserId} = state;
  let userId = 1;
  const {isFetching, didInvalidate, users} = (usersByUserId && usersByUserId[userId]) ? usersByUserId[userId] : {fetching:true, didInvalidate:false, users:[]};
  return {
    userId,
    didInvalidate,
    users,
    isFetching
  }
}

export default connect(mapStateToProps)(Nearby);
