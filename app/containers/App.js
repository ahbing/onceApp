import React, {
  View,
  Text,
  PropTypes,
  Navigator,
  StyleSheet
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import roomAction from '../actions/room';
import roomsAction from '../actions/room';
import nearbyAction from '../actions/nearby';
import commonAction from '../actions/common';

import NearbyContainer from './NearbyContainer';
import RoomContainer from './RoomContainer';
import RoomsContainer from './RoomsContainer';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component navigator={navigator} route={route} />
    )
  }

  configureScene(route) {
    return Navigator.SceneConfigs.FloatFromBottomAndroid
  }
  render(){
    return (
      <Navigator
        ref='navigator'
        style={styles.navigator}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        initialRoute={{
          component: NearbyContainer,
          name: 'NearbyContainer'
        }}
      />
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;
