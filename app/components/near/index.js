import React, {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  WebView
} from 'react-native';

import NavigatorBar from '../tab/NavigatorBar';
import BottomBar from '../tab/BottomBar';


class Near extends React.Component{
  constructor(){
    super();
    const {width} = Dimensions.get('window');

    this.state = {
      url: 'http://ahbing.betahouse.us/nearby.html',
      width: width,
      rotate:'0deg'
    }
  }

  render() {
    const {navigator} = this.props;

    console.log('this.props--=-==-=-==-=-=',this.props);
    return (
      <View>
        <Text>的撒旦撒旦</Text>
        <BottomBar {...this.props}/>
      </View>
    )
  }
}

export default Near;
