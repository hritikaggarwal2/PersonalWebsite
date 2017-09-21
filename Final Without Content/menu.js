$(window).on('load', function() {
    $("#loader").fadeOut("slow");
    $("body,html").css({overflow: "visible"});
});

$(document).ready(function() {
	svgL = [".web",".graphic",".app",".other"]
	
	setTimeout(function(){
	    $("h1").css({opacity: 1,top: "0px"});
		$("h2").css({opacity: 1,top: "0px"});
		
	},800);

	i = 0;
	var looper = setInterval(function(){
		$(svgL[i]).css({opacity: 1,top: "0px"});
		i++;
		if(i == 4)
		{
			clearInterval(looper);
		}
	},500);

	

	$(".web").click(function(){
		$("body,html").animate({scrollTop: $(".wd").offset().top - $(".header").height() - $(".wd").height()},2000)
	});

	$(".graphic").click(function(){
		$("body,html").animate({scrollTop: $(".gd").offset().top - $(".header").height() - $(".gd").height()},2000)
	});

	$(".app").click(function(){
		$("body,html").animate({scrollTop: $(".ap").offset().top - $(".header").height() - $(".ap").height()},2000)
	});

	$(".other").click(function(){
		$("body,html").animate({scrollTop: $(".rnd").offset().top - $(".header").height() - $(".rnd").height()},2000	)
	});


	$(window).scroll(function() {

		winodw_height = $(window).height();
        top_load_pos = 3 * winodw_height / 4;


		if($(".section1").offset().top + $(".section1").height() <= $(window).scrollTop())
		{
			$(".header").css({padding:"30px 0",position:"fixed",top:"0px","background-color":"rgba(255,255,255,0.8)"});
		}
		else
		{
			$(".header").css({padding:"0 0 30px 0",position:"relative",top:"0px","background-color":"transparent"});
		}

		$(".single").each(function() {
		    if($(this).offset().top - top_load_pos <= $(window).scrollTop())
			{
				$(this).children("img").css({opacity:1,top:"0"});
				$(this).children(".desc").css({opacity:1,top:"0"});
			}
		});

        if($(window).scrollTop() >= $(".footer").offset().top - top_load_pos - 150)
		{
        	$(".detail").css({opacity: 1, top: "0px"});
        	$(".last").css({opacity: 1,top: "0px"});
            $(".dot").css({opacity: 1,transform:"scale(1)"});
            $(".love").css({opacity: 1,transform:"scale(1)"});

        }
		
	});

});