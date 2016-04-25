import React, {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  WebView
} from 'react-native';

import NavigatorBar from '../tab/NavigatorBar';
import UsersList from './userList';

class Near extends React.Component{
  constructor(props){
    super(props);
    const {width} = Dimensions.get('window');
  }

  render() {
    const {navigator, isFetching, users} = this.props;
    console.log('index user', users);
    console.log('this.props', this.props);
    return (
      <View>
        {isFetching &&
          <Text>正在加载</Text>
        }
        <Text>welcome</Text>

        <UsersList users = {users} {...this.props}/>
      </View>
    )
  }
}

export default Near;
