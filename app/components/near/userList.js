import React, {
  View,
  Text,
  PropTyoes,
  Navigator,
  StyleSheet,
  Dimensions,
  ListView,
  TouchableOpacity
} from 'react-native'

import fetchNearbyIfNeeded from '../../actions/nearby';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class UserList extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   dataSource: new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1 !== row2,
    //   })
    // };
    console.log(props)
    console.log(this.props)
    const {users} = this.props;
    console.log("UserList", users);
    let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 })
    this.state = {
      dataSource : ds.cloneWithRows([id:1,x:1,y:1])
    }
  }
  _handlePress(userId) {
    console.log(userId);
  }
  renderRow(user) {
    return (
      <TouchableOpacity onPress = {this._handlePress.bind(this, user.id)}>
        <View style = {styles.container}>
          <View style = {styles.rightContainer}>
            <Text style = {styles.title}>{user.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  // componentDidMount() {
  //   const {users} = this.props;
  //   console.log("UserList", users);
  //   this.setState({
  //     dataSource: this.state.dataSource.cloneWithRows(users)
  //   })
  // }
  render() {
    return (
       <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
        style={styles.listView}
      />
    )
  }
}

let styles = StyleSheet.create({
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
    backgroundColor: '#F5FCFF'
  }
})
// UserList.propTyoes = {
//   users: PropTyoes.object
// }


export default UserList;
