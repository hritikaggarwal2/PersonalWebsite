$(window).load(function(){$("#loader").animate({width:"100%"}),setTimeout(function(){$("#loader").fadeOut()},30)}),$(document).ready(function(){timer=setInterval(function(){var a=new Date("5 November 2016"),b=new Date,c=a.getTime(),d=b.getTime(),f=(b.getFullYear(),Math.floor((c-d)/864e5)),g=Math.floor((c-d)/36e5%24),h=Math.floor((c-d)/6e4%60),i=Math.floor((c-d)/1e3%60);f<=0&&g<=0&&h<=0&&i<=0?($(".text h4").html("STARTS TODAY !"),$(".days").hide(),$(".hours").hide(),$(".mins").hide(),$(".secs").hide(),$(".b1 .label").hide(),$(".b2 .label").hide(),$(".b3 .label").hide(),$(".b4 .label").hide(),clearInterval(timer)):($(".days").html(f),$(".hours").html(g),$(".mins").html(h),$(".secs").html(i))},1e3),$(".prelims").click(function(){alert("Not Yet! Check back again later.")}),setTimeout(function(){$(".cover h1").css({opacity:"1",top:"0px"},500),$(".cover h4").css({opacity:"1",top:"0px"},500);var a=0;time=setInterval(function(){a++,boxClass=".cover .b"+a,$(boxClass).css({opacity:"1",top:"0px"},500),a>3&&clearInterval(time)},300)},100);var a=$(window).width();$(window).resize(function(){a=$(window).width()}),console.log(a),$(window).scroll(function(){var b=$(".schedule").offset().top;$(window).scrollTop()>=b-500&&($(".schedule h1").css({opacity:"1",left:"0px"},500),$(".schedule img").css({opacity:"1",left:"0px"},500));var c=$(".events").offset().top;$(window).scrollTop()>=c-500&&$(".events h1").css({opacity:"1",top:"0px"},500);if(a>700){var e=$(".ev1").offset().top,f=$(".ev3").offset().top,g=$(".ev5").offset().top,h=$(".ev7").offset().top;$(window).scrollTop()>=e-550&&($(".ev1").css({opacity:"1",left:"0px"},500),setTimeout(function(){$(".ev2").css({opacity:"1",left:"0px"},500)},0)),$(window).scrollTop()>=f-550&&($(".ev3").css({opacity:"1",left:"0px"},500),$(".ev4").css({opacity:"1",left:"0px"},500)),$(window).scrollTop()>=g-550&&($(".ev5").css({opacity:"1",left:"0px"},500),$(".ev6").css({opacity:"1",left:"0px"},500)),$(window).scrollTop()>=h-550&&$(".ev7").css({opacity:"1",left:"0px"},500)}else{var e=$(".ev1").offset().top,f=$(".ev2").offset().top,g=$(".ev3").offset().top,h=$(".ev4").offset().top,i=$(".ev5").offset().top,j=$(".ev6").offset().top,k=$(".ev7").offset().top;$(window).scrollTop()>=e-550&&$(".ev1").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=f-550&&$(".ev2").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=g-550&&$(".ev3").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=h-550&&$(".ev4").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=i-550&&$(".ev5").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=j-550&&$(".ev6").css({opacity:"1",left:"0px"},500),$(window).scrollTop()>=k-550&&$(".ev7").css({opacity:"1",left:"0px"},500)}})});