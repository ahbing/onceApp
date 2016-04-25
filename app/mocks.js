// 模拟后端数据

// neayby
const users = [
  {id:0, x: 0, y:0},
  {id:1, x: 1, y:1},
  {id:10, x: 10, y:10},
  {id:20, x: 20, y:20},
  {id:30, x: 30, y:30},
  {id:40, x: 40, y:40},
  {id:50, x: 50, y:50}
];

const rooms = [
  {id:0, hosterID:0, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]},
  {id:10, hosterID:10, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]},
  {id:20, hosterID:20, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]},
  {id:30, hosterID:30, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]},
  {id:40, hosterID:40, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]},
  {id:50, hosterID:50, userId:1, describe: "一个风一样的你", record:[ {id:1, text: "say it to me noe", createAt:"1461318022685"} ]}
];

const room = {
  id:0,
  hosterId: 0,
  userId: 1,
  describe: '你是我最痛苦的等待',
  record: [
    {id: 0, text: "hello world1", createAt:'1461318022685'},
    {id: 1, text: "hello world2", createAt:'1461318022695'},
    {id: 0, text: "hello world3", createAt:'1461318022785'},
    {id: 1, text: "hello world4", createAt:'1461318022885'},
    {id: 0, text: "hello world5", createAt:'1461318023685'},
    {id: 1, text: "hello world6", createAt:'1461318023985'},
    {id: 0, text: "hello world7", createAt:'1461318024685'},
    {id: 1, text: "hello world8", createAt:'1461318025685'}
  ]
};

export default {
  users,
  rooms,
  room
}



