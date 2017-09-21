$(window).load(function() {
    $("#loader").fadeOut(2e3);
    $("body,html").css({overflow: "visible"});
});

$(document).ready(function() {
    $("#info p").css({opacity: 1,top: "0px"});
    $("h1").css({opacity: 1,top: "0px"});


    $("#proj").click(function(){
        $("body,html").animate({scrollTop: $("#works").offset().top},1000)
    });

    $(window).scroll(function() {
        winodw_height = $(window).height();
        top_load_pos = 3 * winodw_height / 4;
        
        var a = $("#personal").offset().top;

        if($(window).scrollTop() >= a - top_load_pos)
        {
        	$("#personal h2").css({opacity: 1,top: "0px"})
	        $("#personal p").css({opacity: 1,top: "0px"})
	        $("#personal .leftBig").css({opacity: 1,left: "0px"})
	        $("#personal .left").css({opacity: 1,left: "0px"})
        }

        


        var a = $("#works").offset().top;
        if ($(window).scrollTop() >= a - top_load_pos)
        {
            $("#works .pWks").css({opacity: 1});
        }

        for (var i = 1; i <= 5; i++) {
        	var wid = "#works .w" + i;
        	if($(window).scrollTop() >= $(wid).offset().top - top_load_pos)
        	$(wid).css({opacity: "1",top: "0"});
        }

        var a = $(".button3").offset().top;
        if ($(window).scrollTop() >= a - top_load_pos - 200)
        {
            $(".button3").css({opacity: 1,transform:"scale(1)"});
        }


        var a = $(".contact").offset().top;
        if($(window).scrollTop() >= a - top_load_pos)
    	{
    		$(".contact h1").css({opacity: 1, top: "0px"}),
        	$(".contact p").css({opacity: 1, top: "0px"});
        }

        var a = $("#footer").offset().top;
        if($(window).scrollTop() >= a - top_load_pos)
		{
			$("#footer a").css({transform: "scale(1)"});
        	$(".detail").css({opacity: 1, top: "0px"});
        	$(".last").css({opacity: 1,top: "0px"});
            $(".dot").css({opacity: 1,transform:"scale(1)"});
            $(".love").css({opacity: 1,transform:"scale(1)"});

        }
    });


  
});