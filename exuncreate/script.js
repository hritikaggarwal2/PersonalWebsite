$(document).ready(function(){
	var slide = 1;

	$(".slBtn1").click(function(){
		slide = 1;
		$(".slides").css({"left":"0%"});
		$(".btn").removeClass("cSlide");
		$(this).addClass("cSlide");

		$(".sl h3").css({"opacity":"0","top":"-50px"},1000);
		$(".sl p").css({"opacity":"0","top":"-40px"},1000);
		
		$(".s1 h3").css({"opacity":"1","top":"0px"},1000);
		$(".s1 p").css({"opacity":"1","top":"0px"},1000);

	});

	$(".slBtn2").click(function(){
		slide = 2;
		$(".slides").css({"left":"-100%"});
		$(".btn").removeClass("cSlide");
		$(this).addClass("cSlide");

		$(".sl h3").css({"opacity":"0","top":"-50px"},1000);
		$(".sl p").css({"opacity":"0","top":"-40px"},1000);
		
		$(".s2 h3").css({"opacity":"1","top":"0px"},1000);
		$(".s2 p").css({"opacity":"1","top":"0px"},1000);

	});

	$(".slBtn3").click(function(){
		slide = 3;
		$(".slides").css({"left":"-200%"});
		$(".btn").removeClass("cSlide");
		$(this).addClass("cSlide");

		$(".sl h3").css({"opacity":"0","top":"-50px"},1000);
		$(".sl p").css({"opacity":"0","top":"-40px"},1000);
		

		$(".s3 h3").css({"opacity":"1","top":"0px"},1000);
		$(".s3 p").css({"opacity":"1","top":"0px"},1000);

	});

	$(".slBtn4").click(function(){
		slide = 4;
		$(".slides").css({"left":"-300%"});
		$(".btn").removeClass("cSlide");
		$(this).addClass("cSlide");

		$(".sl h3").css({"opacity":"0","top":"-50px"},1000);
		$(".sl p").css({"opacity":"0","top":"-40px"},1000);
		


		$(".s4 h3").css({"opacity":"1","top":"0px"},1000);
		$(".s4 p").css({"opacity":"1","top":"0px"},1000);

	});

	$("button").mouseover(function(ev){
		var target = $(ev.target);
		var class_button = target.attr('class');

		overlayID = "." + class_button + " .overlay";
		overlayP = "." + class_button + " p";

		$(overlayID).css({left:"200px"})

	
	});


	$("button").mouseout(function(ev){
		var target = $(ev.target);
		var class_button = target.attr('class');

		overlayID = "." + class_button + " .overlay";
		overlayP = "." + class_button + " p";

		$(overlayID).css({left:"-200px"})

		
	
	});
});