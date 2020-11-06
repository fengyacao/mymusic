var request=require("/ht/lo.js");

function checkCookie(){
	//document.cookie="abc=99";
	//window.alert("自动登录跳转");
	var user=getCookie("username");
	var pass=getCookie("userpwd");
	if(user=="admin" && pass=="123456")
	{
		window.alert("自动登录跳转");
		window.location.href="/ht/2.html";
	}
}

function checkok()
{
	let uin = request.localget('uin');
	console.log(uin);
	if(uin=="admin")
	{
		console.log("loginok");
	}else
	{
		console.log("loginfail");
		window.location.href="/ht/1.html";
	}
}

function Login()
{
	var user=document.getElementById("usr").value;
	var pass=document.getElementById("pasw").value;
	var cked = document.getElementsByName('twohour')[0];
	var reg = /^(\w){6,12}$/;
    if(!reg.test(pass))
	{
    alert('密码必须由6-12位数字或者字母组成');
    }
	else {
	if(user=="admin" && pass=="123456")
	{
		//window.alert('pass');
		if(cked.checked)
		{
			setCookie("username",user,'h1');
            setCookie("userpwd",pass,'h1');  
			//window.alert('check');
			document.cookie="userId=828";
			//window.alert(document.cookie);
		}
		request.set('uin',user,20000);		
		window.location.href="/ht/2.html";
	}
	else {window.alert('用户名或密码错误');}
	document.getElementById("usr").value='用户名';
	document.getElementById("pasw").value='****';}
}
function Logout()
{
	document.cookie="userpwd=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	window.location.href="1.html";
	}
function Back()
{
	//document.cookie="userpwd=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	window.location.href="1.html";
}

function setCookie(name,value,time)
{ 
    var strsec = getsec(time); 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + strsec*1); 
    document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString(); 
} 

function getsec(str)
{ 
   //alert(str); 
   var str1=str.substring(1,str.length)*1; 
   var str2=str.substring(0,1); 
   if (str2=="s")
   { 
        return str1*1000; 
   }
   else if (str2=="h")
   { 
       return str1*60*60*1000; 
   }
   else if (str2=="d")
   { 
       return str1*24*60*60*1000; 
   } 
} 
//这是有设定过期时间的使用示例： 
//s20是代表20秒 
	
function getCookie(name) {
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
			return unescape(arr[2]); 
		else 
			return null; 
	}
