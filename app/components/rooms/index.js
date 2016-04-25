import React, {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


import Room from '../room';

class Rooms extends React.Component{
  constructor(props) {
    super(props);
    //this._handlePress = this._handlePress.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  }

  // 点击进入聊天
  _handlePress(roomId){
    const {navigator} = this.props;
    navigator.push(Object.assign({}, {
      name: 'Room',
      component: Room,
      roomId
    }));
  }
  //const REQUEST_URL = '';
  componentDidMount() {
    // 手动开启调用
    // this.fetchData();
    let responseData = [{roomId:"111",title: '标题'},{roomId:"111",title: '标题2'},{roomId:"111",title: '标题3'},{roomId:"111",title: '标题'},{roomId:"111",title: '标题2'},{roomId:"111",title: '标题'},{roomId:"111",title: '标题2'},{roomId:"111",title: '标题'},{roomId:"111",title: '标题2'}];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
      loaded: true
    });
  }

  // 抓取 rooms 后台数据
  //fetchData() {
  //  fetch(REQUEST_URL)
  //    .then((response) => response.json())
  //    .then((responseData) => {
  //      //let responseData = [{title: '标题'},{title: '标题2'},{title: '标题3'}];
  //      this.setState({
  //        dataSource: this.state.dataSource.cloneWithRows(responseData),
  //        loaded: true
  //      });
  //    })
  //    .done();
  //}

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载...
        </Text>
      </View>
    );
  }
  renderRoom(room) {
    return (
      <TouchableHighlight onPress={this._handlePress.bind(this,room.roomId)}>
        <View style={styles.container}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{room.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRoom.bind(this)}
        style={styles.listView}
      />
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth:1,
    borderColor:'#000',
    paddingTop:8,
    paddingBottom:8,
    marginTop:4
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft:12,
    textAlign: 'left'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

export default Rooms;
