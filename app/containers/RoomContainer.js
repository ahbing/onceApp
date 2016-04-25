import React, {
  View,
  Text,
  PropTypes,
  Navigator
} from 'react-native';

import myRoom from '../components/room';

class Room extends React.Component {


  renderScene (route, navigator) {
    if (route.component) {
      const Component = route.component
      return <Component navigator={navigator} route={route} {...this.props} />
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{
          name: 'myRoom',
          component: myRoom
        }}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

Room.propTypes = {
  room: PropTypes.object,
  actions: PropTypes.object
};

export default Room;
