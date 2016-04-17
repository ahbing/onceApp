import React,{
  View,
  Text,
  Component,
  TouchableOpacity
} from 'react-native';


class NavigatorBar extends Component{
  constructor(props){
    super();
    console.log(props);
  }
  _pressButton(){
    console.log('fdsfsd');
  }
  render(){
    return (
      <View style={styles.flexContainer}>
        <View style={styles.cell}>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
            <Text style={styles.text}>
              附近的人
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cell}>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
            <Text style={styles.text}>
              聊天列表
            </Text>
          </TouchableOpacity>
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

export default NavigatorBar

