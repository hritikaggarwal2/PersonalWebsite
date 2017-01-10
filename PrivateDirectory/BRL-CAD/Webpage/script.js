$(document).ready(function(){
	

	prev = 0;

	$(window).scroll(function(){

		i=$(window).scrollTop();
		console.log( )
		if (prev > i) {
			$('.header').css({top:"0px"});
		}
		else
		{

			$('.header').css({top:"-65px"});
		}

		if(i>=($(".section2").offset().top - 250))
		{
			$('.header').addClass("headerchange");
		}

		else
		{
			$( '.header' ).removeClass( "headerchange" );
		}


		prev = i;

	});

	$("#submit").click(function(){
		location.reload();
	});

	var ht = $(".fullContainer").height() + 10;
	var ht2 = $(".fullContainer").height() + 60;
	click = 1;
	$(".more").click(function(){
		if (click == 1) {
			click = 0;
			$(".hidden").css({height:ht2});
			setTimeout(function(){
				$(".hidden").css({height:ht});
			},1000);
			$(".more").html("Done Reading");
		}
		else
		{
			$(".hidden").css({height:"0px"});
			$(".section2 button").css({top:"-30px"});
			setTimeout(function(){
				$(".section2 button").css({top:"0px"});
			},1000);
			$(".more").html("Learn More");
			click = 1;
		}

	});



});