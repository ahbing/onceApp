import React, {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
  Navigator
} from 'react-native';


import myRooms from '../components/rooms';

class Rooms extends React.Component{
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
          name: 'myRooms',
          component: myRooms
        }}
        configureScene={() => ({
          ...Navigator.SceneConfigs.FloatFromRight
        })}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

export default Rooms;
