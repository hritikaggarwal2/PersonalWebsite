$(window).load(function(){$("#loader").fadeOut(2e3),$("body,html").css({overflow:"visible"})}),$(document).ready(function(){$("#info p").css({opacity:1,top:"0px"}),$("h1").css({opacity:1,top:"0px"}),$("#proj").click(function(){$("body,html").animate({scrollTop:$("#works").offset().top},1e3)}),$(window).scroll(function(){winodw_height=$(window).height(),top_load_pos=3*winodw_height/4;s=$("#personal").offset().top;$(window).scrollTop()>=s-top_load_pos&&($("#personal h2").css({opacity:1,top:"0px"}),$("#personal p").css({opacity:1,top:"0px"}),$("#personal .leftBig").css({opacity:1,left:"0px"}),$("#personal .left").css({opacity:1,left:"0px"}));s=$("#works").offset().top;$(window).scrollTop()>=s-top_load_pos&&$("#works .pWks").css({opacity:1});for(var o=1;o<=5;o++){var t="#works .w"+o;$(window).scrollTop()>=$(t).offset().top-top_load_pos&&$(t).css({opacity:"1",top:"0"})}s=$(".button3").offset().top;$(window).scrollTop()>=s-top_load_pos-200&&$(".button3").css({opacity:1,transform:"scale(1)"});s=$(".contact").offset().top;$(window).scrollTop()>=s-top_load_pos&&($(".contact h1").css({opacity:1,top:"0px"}),$(".contact p").css({opacity:1,top:"0px"}));var s=$("#footer").offset().top;$(window).scrollTop()>=s-top_load_pos&&($("#footer a").css({transform:"scale(1)"}),$(".detail").css({opacity:1,top:"0px"}),$(".last").css({opacity:1,top:"0px"}),$(".dot").css({opacity:1,transform:"scale(1)"}),$(".love").css({opacity:1,transform:"scale(1)"}))})});