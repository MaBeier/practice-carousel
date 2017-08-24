var btn=document.getElementById('btn');
var ul_list=document.getElementById('ul_list');
var ul_list_item=ul_list.getElementsByTagName('li');
var img_list_ul=document.getElementById('img_list_ul');
var imgs=img_list_ul.getElementsByTagName('img');
var img_list_lis=img_list_ul.getElementsByTagName('li');



var container=document.getElementById('container');
var wrap=document.getElementById('wrap');

window.onload=function(){
	//获取窗口宽度
	if (window.innerWidth){
	    var winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
	    var winWidth = document.body.clientWidth;
	}

	//获取窗口高度
	if (window.innerHeight){
		var winHeight = window.innerHeight;
	}else if((document.body) && (document.body.clientHeight)){
		var winHeight = document.body.clientHeight;
	}
	
	container.style.width=winWidth+'px';
	container.style.height=winHeight+'px';
}




//菜单btn
var m=false;
btn.onclick=function(){
	if(m==false){
	ul_list.style.display='block';
	m=true;
	}
	else{
		ul_list.style.display='none';
		m=false;
	}		
}


init();
function init(){
	var images=['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg','img/06.jpg','img/07.jpg','img/08.jpg','img/09.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg','img/19.jpg','img/20.jpg','img/21.jpg','img/22.jpg','img/23.jpg'];
	var len=images.length;
		for(var i=20;i>0;i--){
			var m=Math.floor(Math.random()*(len-(20-i)));
			var url=images[m];
			var ii=show_images_item(url,(20-i));
			images.splice(m,1);
		}
}



var time={},url=[],index=[];
for (var i = 0; i < imgs.length; i++) {
	 url.push(imgs[i].getAttribute('src'));
	 index.push(imgs[i].getAttribute('data-index'));
}


img_list_ul.onmouseover=function(){
	if(time){
		clearTimeout(time);
	}
}

img_list_ul.onmouseout=function(){
	time=setInterval(function(){
		changeImg(url,index);
	},5000);
}


function changeImg(url,index){
	for(var i=0;i<index.length;i++){
		index[i]++;
		if(index[i]>19){
			index[i]=0;
		}
	show_images_item(url[i],index[i]);
	}
		if(img_list_lis.length>19){
			img_list_ul.innerHTML='';
			ul_list.innerHTML='';
			for(var i=0;i<index.length;i++){
			show_images_item(url[i],index[i]);
		}
	}
}




function show_images_item(url,idx){
	var item='<li data-index="'+ idx +'" ><img  onclick="openImg(src)" data-index="'+ idx +'" src="'+ url +'"></li>';
	img_list_ul.innerHTML+=item;
	ul_list.innerHTML+=item;
	
	
}


function openImg(src){
	wrap.style.display='block';
	var item='<img src="'+src+'" >';
	wrap.innerHTML=item;
	wrap.onclick=function(){
		wrap.style.display='none';
	}
}


