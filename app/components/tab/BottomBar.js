import React,{
  View,
  Text,
  Component,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


class BottomBar extends Component{
  constructor(){
    super();
    this._pressButton = this._pressButton.bind(this)
  }
  _pressButton(tab){
    const {actions} = this.props;
    actions.changeTab(tab);
  }
  render(){
    return (
      <View style={styles.flexContainer}>
        <View style={styles.cell}>
          <TouchableHighlight onPress={this._pressButton('nearby')}>
            <Text style={styles.text}>
              附近的人
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.cell}>
          <TouchableHighlight onPress={this._pressButton('rooms')}>
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


