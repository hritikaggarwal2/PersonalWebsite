$(window).load(function(){$("#loader").fadeOut(2e3),$("body,html").css({overflow:"visible"})}),$(document).ready(function(){$("#info p").css({opacity:1,top:"0px"}),$("h1").css({opacity:1,top:"0px"}),$(window).scroll(function(){winodw_height=$(window).height(),top_load_pos=3*winodw_height/4;var a=$("#personal").offset().top;$(window).scrollTop()>=a-top_load_pos&&($("#personal h2").css({opacity:1,top:"0px"}),$("#personal p").css({opacity:1,top:"0px"}),$("#personal .leftBig").css({opacity:1,left:"0px"}),$("#personal .left").css({opacity:1,left:"0px"}),$(".skills img").css({transform:"scale(1)"}));var a=$("#works").offset().top;if($(window).scrollTop()>=a-top_load_pos){$("#works h2").css({color:"#111"}),wks=1;var b=setInterval(function(){wid=".w"+wks,$(wid).css({opacity:"1",top:"0"}),wks++,wks>8&&clearInterval(b)},200)}var a=$(".contact").offset().top;$(window).scrollTop()>=a-top_load_pos&&($(".contact h1").css({opacity:1,top:"0px"}),$(".contact p").css({opacity:1,top:"0px"}));var a=$("#footer").offset().top;$(window).scrollTop()>=a-top_load_pos&&($("#footer a").css({transform:"scale(1)"}),$(".detail").css({opacity:1,top:"0px"}),$(".last").css({opacity:1,top:"0px"}))}),scrollList=["#2685ab","#2ba966","#7f4ab6","#7247b8","#b93333","#4b32a7","#b13558","#3386a5","#239388","#bb4649","#3858b4","#5d9a35"],colorList=["#4eb5dd","#33c477","#a068d9","#7e51c8","#d73d3d","#553eaa","#d1466d","#41a0c4","#27a79a","#e8676b","#466ad1","#74b747"],ltTxtColor=["#328eb2","#2eae6f","#8342c5","#6f46b4","#d73d3d","#503e95","#d1466d","#2b7c9b","#27a79a","#d3565a","#3e60c1","#68a83d"],darkColor=["#40a0c6","#28a361","#8342c5","#643da5","#b43333","#3e2e78","#b03759","#2b7c9b","#1f8f84","#bb484b","#324fa3","#5c9834"],click=0,$("#colorBar").click(function(){0==click?(click=1,$("#colorBar img").css({transform:"rotate(90deg)"}),$("#colorPicker").css({display:"inline"}),setTimeout(function(){$("#colorPicker").css({opacity:"1",top:"70px"}),setTimeout(function(){$(".mainBox p").css({opacity:"1",top:"0px"}),$(".op").delay(1e3).css({opacity:"1"})})})):(click=0,$("#colorBar img").css({transform:"rotate(0deg)"}),$(".mainBox p").css({opacity:"0",top:"10px"}),$(".op").delay(1e3).css({opacity:"0"}),setTimeout(function(){$("#colorPicker").css({opacity:"0",top:"90px"}),setTimeout(function(){$("#colorPicker").css({display:"none"})},500)},100))}),$("#colorBar").mouseover(function(){0==click&&$("#colorBar img").css({transform:"rotate(30deg)"})}),$("#colorBar").mouseout(function(){0==click&&$("#colorBar img").css({transform:"rotate(0deg)"})}),$("#section1, #personal, #works, .contact, #footer").click(function(){$("#colorBar img").css({transform:"rotate(0deg)"}),click=0,$(".mainBox p").css({opacity:"0",top:"10px"}),$(".op").delay(1e3).css({opacity:"0"}),setTimeout(function(){$("#colorPicker").css({opacity:"0",top:"90px"}),setTimeout(function(){$("#colorPicker").css({display:"none"})},500)},100)}),$(".o1 .selected").css({opacity:"1"}),$(".op").click(function(){$(".selected").css({opacity:"0"}),classNumber=this.className.split(" "),select="."+classNumber[1]+" .selected",$(select).css({opacity:"1"}),num=classNumber[1].split("o"),bgColor=num[1],$("head").append("<style>#colorBar:before{border-color:"+colorList[bgColor-1]+"!important;} #colorBar:after{border-color:"+colorList[bgColor-1]+"!important;}::-webkit-scrollbar-thumb{background-color:"+scrollList[bgColor-1]+"!important;}::-webkit-scrollbar-thumb:hover{background: "+colorList[bgColor-1]+"!important;}::-webkit-scrollbar-thumb:active{background:"+colorList[bgColor-1]+"!important;} </style>"),$(".txtColor").css({color:ltTxtColor[bgColor-1]}),$("#colorBar").css({background:colorList[bgColor-1]}),$(".start").css({background:colorList[bgColor-1]}),$(".viewMore").css({background:colorList[bgColor-1]}),$(".filler").css({background:darkColor[bgColor-1]}),$(".contact h1").css({color:darkColor[bgColor-1]}),$("#footer a").css({color:"#777"}),$("#footer a").mouseover(function(){$(this).css({color:darkColor[bgColor-1]})}),$("#footer a").mouseout(function(){$(this).css({color:"#777"})})})})