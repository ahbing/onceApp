import React, {
  View,
  Text,
  PropTypes,
  Navigator
} from 'react-native';

import Near from '../components/near';

class Nearby extends React.Component {
  render (){
    return (
      //<Navigator
      //  initialRoute={{
      //  name: Near,
      //  component: Near
      //}}
      //  configureScene={()=>{
      //  return Navigator.SceneConfigs.HorizontalSwipeJump;
      //}}
      //  renderScene={(route, navigator) => {
      //  console.log('dsadkljab ===============',navigator)
      //  if (route.component) {
      //    const Component = route.component;
      //    console.log('component',Component);
      //    return (<Component navigator={navigator} route={route} {...this.props} />)
      //  }
      //}}>
      //</Navigator>

      <Near {...this.props}/>

    )
  }
}

Nearby.propTypes = {
  nearby: PropTypes.object,
  actions: PropTypes.object
};

export default Nearby;
