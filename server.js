var http = require('http');
var mysql = require('mysql');
var express = require('express');
var sio = require('socket.io');
var connectDB = require("./connectDB.js");
var app = express();
var config=require("./config");
var crypto=require("crypto");
app.disable('etag');
//app.use(express.static(__dirname + ''));//设置静态路由
app.get("/wx",function(req,res){
	var timestamp=req.query.timestamp;
	var signature=req.query.signature;
	var nonce=req.query.nonce;
	var echostr=req.query.echostr;

	var array=[config.token,timestamp,nonce];
	array.sort();
	var temstr=array.join('');
	const hashcode=crypto.createHash('sha1');
	var rescode=hashcode.update(temstr,'utf8').digest('hex');
	
	if(rescode == signature){
		res.send(echostr);
	}else{
		res.send('mismatch');
	}
})
app.use(express.static(__dirname + ''));//设置静态路由
//app.use(express.static(__dirname + './index.html'));//设置静态路由
var server = http.createServer(app);
server.listen(80);//监听端口
//var io = sio.listen(server);
var io = sio.listen(server);
var options = {
    host: '127.0.0.1',
    port: 3306,
    database: 'logindb',
    user: 'root',
    password: '324321548Ss$',
    multipleStatements: true,//支持多语句查询
};//连接数据库的参数
//连接数据库
var connection = mysql.createConnection(options);
var date = new Date();
connection.connect(function (err) {
    if (!err) { 
        console.log('与数据库连接成功');
     }
    else { console.log('与数据库连接失败，可能网断了。'); }
});

//等待客户端连接socket的事件发生
io.sockets.on('connection', function (socket) {
    //这个回调函数包含着服务器的所有内容，所有的事件都是建立在联接的基础上的
    socket.on("sendDataToServer", function (data) {//等待前端发送数据
        // console.log("switch中的：----" + data);
        //operation不同，对data里的其它参数进行处理的方法就不同
        console.log("执行"+ data.operation + "操作。");
        
        switch (data.operation) {
            case 'query':
                connectDB.queryDB(connection, io, data);
                break;
            case "insert":
                connectDB.insertDB(connection, io, data);
                break;
            case "update":
                connectDB.updateDB(connection, io, data);
                break;
            case "delete":
                connectDB.deleteDB(connection, io, data);
                break;
            case "login":
                connectDB.login(connection, io, data);
                break;
            default:
                console.log("出现错误。");
                break;
        }
        // io.sockets.emit('sendDataToClient', data);
        // console.log("收到了数据并进行了广播");

    });
});


