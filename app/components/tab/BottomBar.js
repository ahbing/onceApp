import React,{
  View,
  Text,
  Component,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import NearbyContainer from '../../containers/NearbyContainer';
import RoomsContainer from '../../containers/RoomsContainer';

class BottomBar extends Component{
  constructor(props){
    super(props);
  }
  handlePress(target) {
    const {navigator, dispatch} = this.props;
    const currentRoutes = navigator.getCurrentRoutes();
    console.log('old',currentRoutes);
    // switch (target) {
    //   case 'near':
    //     newRoute = {
    //       component:NearbyContainer,
    //       name:'NearbyContainer'
    //     }
    //   break;
    //   case 'list' :
    //     newRoute = {
    //       component:RoomsContainer,
    //       name:'RoomsContainer'
    //     }
    //   break;
    // }
    navigator.push({
      component:RoomsContainer,
      name:'RoomsContainer'
    });
    console.log('new',currentRoutes);
  }
  render(){
    return (
      <View style={styles.flexContainer}>
        <View style={styles.cell}>
          <TouchableHighlight onPress={this.handlePress.bind(this,'near')}>
            <Text style={styles.text}>
              附近的人
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.cell}>
          <TouchableHighlight onPress={this.handlePress.bind(this, 'list')}>
            <Text style={styles.text}>
              聊天列表
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}


styles = {
  flexContainer: {
    // 容器需要添加direction才能变成让子元素flex
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    height: 50,
    backgroundColor: '#aaaaaa'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
};

export default BottomBar


