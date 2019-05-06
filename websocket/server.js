/*构建http服务*/
var app = require('http').createServer()
/*引入socket.io 并监听当前服务器的端口*/
var io = require('socket.io')(app);
/*定义监听端口，可以自定义，端口不要被占用*/
var PORT = 4000;
/*监听端口*/
app.listen(PORT);

io.on('connection', function (socket) {
  /*所有的监听on，与发送emit都得写在连接里面，包括断开连接*/
  socket.on('clientmsg', msg => { 
    /*向当前客户端返回数据*/
    socket.emit('sendSuccess','当前客户端'+msg.message)
    /*向所有连接的客户端广播add事件*/
    io.sockets.emit('add','所有客户端'+msg.message)
  })
})

console.log('app listen at'+PORT);