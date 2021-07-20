window.onload = function(){
	/* 个位数转两位数 */
	function doubleNum(n){
		return (n <10) ? ("0" + n) : (n);
	}
	/* 储存信息 */
var songName=["1tro","Best of 2020","Don't Leave Me Alone","Dreamer","Everything I Need and Nightlight","Feeling Good","Love Shouldnt Be So Hard","May it be","Miami82","Pray","Waytoyou","ysgqc","情非得已","靜悄悄"]
var singers=["kygo","summer sounds","David Guetta feat Anne-Marie","Axwell-Ingrosso","VA","Avicii","CARTA","enya","kygoRemix","Alok","Gareth","sj","rouze,Sam Feldt,何维健","蔡恩雨"]
	/* 动态插入css代码片段 */
	var head = $('head')[0];
	var songlenth=songName.length;
      var songlendu=  songlenth -1;
var SongName1=[];
var Singers1=[];
for(let i=0; i < songlenth; i++){
	Singers1[i]=singers[i].replace(/ /g, "%20");
	Singers1[i]=Singers1[i].replace(/'/g, "%27");
	Singers1[i]=Singers1[i].replace(/\(/g, "%28");
	Singers1[i]=Singers1[i].replace(/\)/g, "%29");
	SongName1[i]=songName[i].replace(/ /g, "%20");
	SongName1[i]=SongName1[i].replace(/'/g, "%27");
	SongName1[i]=SongName1[i].replace(/\(/g, "%28");
	SongName1[i]=SongName1[i].replace(/\)/g, "%29");
console.log(SongName1[i],Singers1[i]);
}

        let uin = get1('uin');
        console.log(uin);
if(uin=="yacao"||uin=="guest")
        {
                console.log("loginok");
        }else
        {
                console.log("loginfail");
                location.href="./login.html";
        }
	function loadCssCode(code){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.rel = 'stylesheet';
		style.id = 'style';
		try{
			//for Chrome Firefox Opera Safari
			style .appendChild(document.createTextNode(code));
		}catch(ex){
			//for IE
			style.styleSheet.cssText = code;
		}
		head.appendChild(style);
	}
	var odiv=document.getElementById("mydiv");
	var obar=document.getElementById("mybar");
	var obg=document.getElementById("mybg");
	var otext=document.getElementById("mytext");
	var kuan = odiv.clientWidth;
	var leftmine=0;
	obg.onclick=function (e){
		console.log("ok");
		leftmine = e.pageX +"px";
		console.log(leftmine);
		obar.style.width = leftmine;
		realTime = parseInt((e.pageX*totalTime)/kuan);
		realMinute = doubleNum(parseInt(realTime/60));
		realSecond = doubleNum(realTime%60);
		oRealTime = $(".realTime")[0];
		myMusic.currentTime = realTime;
		oRealTime.innerHTML = realMinute + ":" + realSecond;
	}
	obar.onclick=function (e){
		console.log("ok");
		leftmine = e.pageX +"px";
		console.log(leftmine);
		obar.style.width = leftmine;
		realTime = parseInt((e.pageX*totalTime)/kuan);
		realMinute = doubleNum(parseInt(realTime/60));
		realSecond = doubleNum(realTime%60);
		oRealTime = $(".realTime")[0];
		myMusic.currentTime = realTime;
		oRealTime.innerHTML = realMinute + ":" + realSecond;
	}
	/* 定时器 */
	function oTimer(){
		real = setInterval( function(){
			realTime = parseInt(myMusic.currentTime);
			realMinute = doubleNum(parseInt(realTime/60));
			realSecond = doubleNum(realTime%60);
			oRealTime.innerHTML = realMinute + ":" + realSecond;
			left = (realTime*400)/totalTime;
			leftmine = (realTime*kuan)/totalTime;
			obar.style.width = leftmine  + "px";
			if(myMusic.ended){
				Play = false;
				oPaly.className = "play iconfont Iconfont icon-zanting";
				oPaly.title = "播放";
			}
		},1000)
	}
	/* 更新信息 */
	function update(){

			$(".songName")[0].innerHTML = songName[I];
			$(".singer")[0].innerHTML = singers[I];

		document.title=songName[I];
		Txt = "#"+songName[I];
		TXT = $(Txt);
		lrc = TXT.value;
		Initialize();
		updatedb();
	}



	/* 上一首 */
	var I = 0; var arr = null; var Txt = null; var TXT = null;
	Txt = "#"+songName[0];
	TXT = $(Txt);
	lrc = TXT.value;
	var lrc = TXT.value;
	var oLast = $(".last")[0];
	oLast.onclick = function(){
if(myMusic.loop != true){
		--I; (I < 0) ? I = songlendu : I = I;}
if( Num ==2 ){
		I = Math.floor(Math.random() * songlendu);
		(I > songlendu) ? I = 0 : I = I;
}
		if($("#style") != null){
			head.removeChild(style);
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(../img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}else{
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(../img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}
		myMusic.pause();
		myMusic.src = `./music/mp3/${songName[I]}_${singers[I]}.mp3`;
		Play = true;
		oPaly.className = "play iconfont Iconfont icon-bofang";
		oPaly.title = "暂停";
		/* 延时获取totalTime */
		setTimeout( function(){
myMusic.addEventListener("canplay", function() {
				console.log(parseInt(myMusic.duration));
				totalTime = parseInt(myMusic.duration);
			});
			realTime = parseInt(myMusic.currentTime);
			totalMinute = doubleNum(parseInt(totalTime/60));
			totalSecond = doubleNum(totalTime%60);
			oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
			left = 0;
			myMusic.play();
			oLyric.scrollTop = 0;
			clearInterval(real);
			oTimer();
		},200);
		/* 更新信息 */
		update();
	}
	/* 下一首 */
	var oNext = $(".next")[0];
	oNext.onclick = function(){
if(myMusic.loop != true){
		++I; (I > songlendu) ? I = 0 : I = I;}
if( Num ==2 ){
		I = Math.floor(Math.random() * songlendu);
		(I > songlendu) ? I = 0 : I = I;
}
		if($("#style") != null){
			head.removeChild(style);
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}else{
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}	
		myMusic.pause();
		myMusic.src = `./music/mp3/${songName[I]}_${singers[I]}.mp3`;
		Play = true;
		oPaly.className = "play iconfont Iconfont icon-bofang";
		oPaly.title = "暂停";
		/* 延时获取totalTime */
		setTimeout( function(){
myMusic.addEventListener("canplay", function() {
				console.log(parseInt(myMusic.duration));
				totalTime = parseInt(myMusic.duration);
			});
			realTime = parseInt(myMusic.currentTime);
			totalMinute = doubleNum(parseInt(totalTime/60));
			totalSecond = doubleNum(totalTime%60);
			oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
			left = 0;
			myMusic.play();
			oLyric.scrollTop = 0;
			clearInterval(real);
			oTimer();
		},200);
		/* 更新信息 */
		update();
	}
	/* 播放/暂停 */
	var oPaly = $(".play")[0];
	var Play = false;
	oPaly.onclick = function(){
		if(Play){
			myMusic.pause();
			Play = false;
			oPaly.className = "play iconfont Iconfont icon-zanting";
			oPaly.title = "播放";
			clearInterval(real);
		}else{
			myMusic.play();
			Play = true;
			oPaly.className = "play iconfont Iconfont icon-bofang";
			oPaly.title = "暂停";
			/* 当前时长 */
			oTimer();
		}
	}
	/* 歌曲进度条 */
	/* 音频时间 */
	//总时长
	var real;
	var myMusic = $("#myMusic");
	var totalTime;
	var totalMinute;
	var totalSecond;
	var oTotalTime;
	/* 确保获取成功 */
	setTimeout( function(){
myMusic.addEventListener("canplay", function() {
				console.log(parseInt(myMusic.duration));
				totalTime = parseInt(myMusic.duration);
			});
		totalMinute = doubleNum(parseInt(totalTime/60));
		totalSecond = doubleNum(totalTime%60);
		oTotalTime = $(".totalTime")[0];
		oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
	},200);
	/* 当前时长 */
	var realTime = parseInt(myMusic.currentTime);
	var realMinute = doubleNum(parseInt(realTime/60));
	var realSecond = doubleNum(realTime%60);
	var oRealTime = $(".realTime")[0];
	/* 音量 */
	/* 音量进度条 */
	/* 单曲/列表/随机循环图标 */
	var oLoop = $(".loop")[0];
	var Num = 1;
	var Company = 1;
	oLoop.onclick = function(){
		switch(Num){
			case 1:
				oLoop.className = "iconfont loop icon-suiji";
				Num = 2;
				myMusic.loop = false;
				break;
			case 2:
				oLoop.className = "iconfont loop icon-danquxunhuan";
				Num = 3;
				myMusic.loop = true;
				break;
			case 3:
				oLoop.className = "iconfont loop icon-liebiaoxunhuan";
				Num = 1;
				myMusic.loop = false;
				break;
		}
	}
	if( Num ==1 ){
		/* 循环播放 */
		myMusic.onended = function(){
			oNext.click();
		}
	}else if( Num ==3 ){
		/*随机播放*/
		myMusic.onended = function(){
			I = Math.floor(Math.random() * songlendu);
			(I > songlendu) ? I = 0 : I = I;
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
			myMusic.pause();
			myMusic.src = `./music/mp3/${songName[I]}_${singers[I]}.mp3`;
			Play = true;
			oPaly.className = "play iconfont Iconfont icon-bofang";
			oPaly.title = "暂停";
			/* 延时获取totalTime */
			setTimeout( function(){
myMusic.addEventListener("canplay", function() {
				console.log(parseInt(myMusic.duration));
				totalTime = parseInt(myMusic.duration);
			});
				realTime = parseInt(myMusic.currentTime);
				totalMinute = doubleNum(parseInt(totalTime/60));
				totalSecond = doubleNum(totalTime%60);
				oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
				left = 0;
				myMusic.play();
				oLyric.scrollTop = 0;
				clearInterval(real);
				oTimer();
			},200);
			/* 更新信息 */
			update();
		}
	}
	/* 喜爱 */
	/* 播放列表 */
	var oLiebiao = $(".liebiao")[0];
	var oList = $(".list")[0];
	var oListTriangle = $(".listTriangle")[0];
	var Open1 = false;
	oLiebiao.onclick = function(){
		if(Open1){
			oList.style.display = "none";
			oListTriangle.style.display = "none";
			Open1 = false;
		}else{
			oList.style.display = "";
			oListTriangle.style.display = "";
			Open1 = true;
		}
	}
	/* 更多 */
	/* 初始化页面 */
	var str = "";
	/* 歌曲,歌手名称，歌单 */
	$(".songName")[0].innerHTML = songName[0];
	$(".singer")[0].innerHTML = singers[0];
	for(let i=0; i < songlenth; i++){
		str += `<p class="listmusic ${i}"><span>${songName[i]}</span><span>&nbsp;&nbsp;--&nbsp;&nbsp;</span><span>${singers[i]}</span></p>`;
/*		str += `<p class="listmusic ${i}"><span class="l">${songName[i]}</span><span >--</span><span class="r">${singers[i]}</span></p>`;*/
		$(".Song")[0].innerHTML = str;
	}

	for(let i=0; i < songlenth; i++){
	var lmusic = $(".listmusic")[i];
	lmusic.onclick=function(){
		if($("#style") != null){
			head.removeChild(style);
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[i]}_${Singers1[i]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}else{
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[i]}_${Singers1[i]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}
		myMusic.pause();
		myMusic.src = `./music/mp3/${songName[i]}_${singers[i]}.mp3`;
		Play = true;
		oPaly.className = "play iconfont Iconfont icon-bofang";
		oPaly.title = "暂停";
		/* 延时获取totalTime */
		setTimeout( function(){
myMusic.addEventListener("canplay", function() {
				console.log(parseInt(myMusic.duration));
				totalTime = parseInt(myMusic.duration);
			});
			realTime = parseInt(myMusic.currentTime);
			totalMinute = doubleNum(parseInt(totalTime/60));
			totalSecond = doubleNum(totalTime%60);
			left = 0;
			myMusic.play();
			oLyric.scrollTop = 0;
			clearInterval(real);
			oTimer();
		},200);
I=i;
		/* 更新信息 */
		update();

        }
}

	function p_onclick(inms){
 myMusic.pause();
                Play = false;
                /* 延时获取totalTime */
                setTimeout( function(){
                 //               totalTime = parseInt(myMusic.duration);
                   //     realTime = parseInt(myMusic.currentTime);
                //        totalMinute = doubleNum(parseInt(totalTime/60));
                  //      totalSecond = doubleNum(totalTime%60);
                   //     oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
                   //     left = 0;
		muMusic.currentTime=inms;
                        myMusic.play();
                  //      oLyric.scrollTop = 0;
                 //       clearInterval(real);
                   //     oTimer();
                },200);
                /* 更新信息 */
                update();

	
}
	

	/* 解析lrc */
	var lrcArr = lrc.split("[");
	var html = "";
	var oLyric = $(".Lyric")[0];
	Initialize();
	function Initialize(){
		for(let i=0; i < lrcArr.length ; i++){
			lrcArr = lrc.split("[");
			arr = lrcArr[i].split("]");
			var time = arr[0].split(".");
			var timer = time[0].split(":");
			var ms = timer[0] * 60 + timer[1] * 1;
			var text = arr[1];
			if(text){
				html += "<p id=" + ms +" style=\"color:rgba(0,63,76,0.2);\" onclick=\"p_onclick(${ms})\">" + text + "</p>";
			}
			oLyric.innerHTML = html;
			arr[0] = null; arr[1] = null;
		}
		html = "";
	}
	var oP = oLyric.getElementsByTagName("p");
	/*歌词滚动*/
	myMusic.addEventListener("timeupdate",function(){
	    if($("#"+realTime)){
			/*清除样式*/
	        for(let i=0; i < oP.length ; i++){
	            oP[i].style.cssText = "color:rgba(0,63,76,0.2);font-size: 16px;";
	        }
			/* 歌词滚动 */
	        $("#"+realTime).style.cssText = "color: linear-gradient(-3deg,rgba(0,0,0,1) 0%,rgba(1,1,1,1) 90%);font-size: 20px;";
			//获得滚动窗口距离浏览器的距离
var mylrcf = document.getElementById(realTime);
document.title=mylrcf.innerHTML;
			var Distance1 = oLyric.offsetTop;
			//获得当前歌词距离浏览器顶部的距离
			var Distance2 = $("#"+realTime).offsetTop;
			//获得当前歌词距离滚动窗口的距离
			var Distance3 = Distance2-Distance1;
			//获得滚动窗口的滚动距离
			var Rolling = Distance2-Distance1-153;
			//比较当前歌词距离滚动窗口的距离，大于153，就让窗口滚动
			if(Distance3>153){
				oLyric.scrollTop = Rolling;
			}
	    }
		/* 播放完毕归位 */
		if(realTime >= (totalTime-1)){
			oLyric.scrollTop = 0;
		}
	})

// 两种用户共同使用一个前端js文件，权限的区分仅仅通过HTML页面的不同
var socket = io.connect();//与服务器建立连接,当这个页面被加载的时候，会建立一个全局的socket，它会被四种操作共用

function query() {
    var data = {
        operation: "query",
        table: "loglist",
        tname: uin
    }//前后端传输的数据
    //获取单选框里的值,得到需要查询的表
    console.log("开始获取tableName");
    socket.emit('sendDataToServer', data);//将数据发到服务器
}//查询按钮的单击响应函数

//socket.on('sendMessage', function (message) {
//    alert(message);
//});// 接收后台发送的一些小提示(alert)，包括密码错误，插入成功等等

function getPrimary(tableName) {//通过表名获取主键的函数
    var primakey;
    switch (tableName) {
        case "loglist":
            primakey = {
                name: ""
            }
            break;
        case "course":
            primakey = {
                courseNumber: "",
                courseName: ""
            }
            break;
        case "score":
            primakey = {
                studentID: "",
                courseName: ""
            }
            break;
        default:
            console.error("获取主键信息时发生意外。");
            break;
    }
    return primakey;// 单出口
}//通过表名得到表的主键，修改和删除操作要用

var updateData = {
    operation: "update",
    table: "loglist",
    condition: {},//sql语句的where部分，将信息的主键作为要改变的信息的限制条件
    updateValues: {}//sql语句的set后面的部分，数据库中要改变的信息

}//记录表格中数值变化的对象，暂且只记录一行数据的变化，修改操作使用的对象

var t=new Date();
var month=t.getMonth()+1;
var day=t.getDate();
var hour=t.getHours();
var minute=t.getMinutes();
var seconds=t.getSeconds();
var showtime=month + "/" + day+ "-" + hour+ ":" + minute+ ":" + seconds;

function updatedb()
{
	updateData.updateValues['songnum'] = I;
	updateData.updateValues['logintime'] = showtime;
	updateData.condition['name'] = uin;
	socket.emit('sendDataToServer', updateData);//向服务器发送数据
    updateData.condition = {};//把这个全局变量变成原来的样子
    updateData.updateValues = {};//把这个全局变量变成原来的样子
}

var queryflag=1;

socket.on('sendQueryResult', function (queryResult) {
if(queryflag == 1){
        for (const key in queryResult) {
		console.log("遍历中的key-----" + key);
        }//循环结束
    // console.log(queryResult);
    //收到查询结果后，将数据变成表格
    //获取这个字段的主键信息
    // primakey1;
    // alert(item);
    var primakey = getPrimary("loglist");//通过表名得到表的主键，将主键作为对象的键存入primakey
    for (const key1 in queryResult) {
        for (const key2 in primakey) {
            if (key1 == key2) {
                primakey[key2] = queryResult[key1];
            }
        }
    }// 循环查询结果的一个字段，得到当前字段的主键对应的值
    console.log("queryResult-num" + queryResult['songnum']);
    I=queryResult['songnum'];

	if($("#style") != null){
			head.removeChild(style);
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}else{
			loadCssCode(`.Opage::before{ position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: -30px; z-index: -1; content: ''; background: url(./img/${SongName1[I]}_${Singers1[I]}.jpg) no-repeat; background-size:100% 100%; filter: blur(20px); }`);
		}	
		myMusic.pause();
		myMusic.src = `./music/mp3/${songName[I]}_${singers[I]}.mp3`;
		Play = true;
			oPaly.className = "play iconfont Iconfont icon-bofang";
			oPaly.title = "暂停";
			/* 延时获取totalTime */
			setTimeout( function(){
					totalTime = parseInt(myMusic.duration);
consloe.log(totalTime);
				realTime = parseInt(myMusic.currentTime);
				totalMinute = doubleNum(parseInt(totalTime/60));
				totalSecond = doubleNum(totalTime%60);
				oTotalTime.innerHTML = totalMinute + ":" + totalSecond;
				left = 0;
				myMusic.play();
				oLyric.scrollTop = 0;
				clearInterval(real);
				oTimer();
			},200);
		
	update();
queryflag=0;
console.log("enter if");
}else
{
console.log("enter else");
}
    // console.log(primakey);
});//sendQueryResult事件会在前端发出查询（query）请求并且受到服务器返回来的数据之后，在前端创建html表格

query();
}




