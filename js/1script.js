window.onload = function(){
	/* 个位数转两位数 */
	function doubleNum(n){
		return (n <10) ? ("0" + n) : (n);
	}
	/* 储存信息 */
var songName=["1tro","Don't Leave Me Alone","Dreamer","Feeling Good","Love Shouldnt Be So Hard","Miami82","Pray","THE LUDLOWS","过招","靜悄悄","飞鸟和蝉"]
var singers=["kygo","David Guetta feat Anne-Marie","Axwell-Ingrosso","Avicii","CARTA","kygoRemix","Alok","LEGENDS OF THE FALL","蔡恩雨","蔡恩雨","任然(Cover 蔡恩雨)"]
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
	/* 定时器 */
	function oTimer(){
		real = setInterval( function(){
			realTime = parseInt(myMusic.currentTime);
			realMinute = doubleNum(parseInt(realTime/60));
			realSecond = doubleNum(realTime%60);
			oRealTime.innerHTML = realMinute + ":" + realSecond;
			left = (realTime*400)/totalTime;
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
				totalTime = parseInt(myMusic.duration);
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
			totalTime = parseInt(myMusic.duration);
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
					totalTime = parseInt(myMusic.duration);
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
/*			if(myMusic.readyState == 4){ */
				totalTime = parseInt(myMusic.duration);
/*			}else{
				location.reload();
				alert("信息获取错误，自动刷新页面")
			}  */
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
				html += "<p id=" + ms +" style=\"color:rgba(0,63,76,0.2);\">" + text + "</p>";
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
	
}
