$(document).ready(function() {

	var imgList = ["facebookColoured.png","twitterColoured.png","linkedinColoured.png","gitColoured.png"]
	var imgList2 = ["facebook.png","twitter.png","linkedin.png","git.png"]
	var colourList = ["#3b5997","#00aced","#0077b5","#0d2636"];
	
	// $(".floats").mouseover(function(){
	// 	var ClassName = $(this).find('.cur');
	// 	var mainClass = $(ClassName).attr('class').split(' ');

	// 	classNumber = mainClass[1].split('');
	// 	imgNumber = parseInt(classNumber[5] - 1);


	// 	txtClass = $(this).find('h1 span');
	// 	$(txtClass).css({color:colourList[imgNumber]})

	// 	imgClass = $(this).find('.more');
	// 	$(imgClass).css({background:"url("+ imgList[imgNumber] +") no-repeat 50% 50%","background-size":"contain",
	// "background-position": "center center"})
	// });


	//function for rotating the social netwrok links on resize........
	function resize () {
		for (var changeSize = 1; changeSize <= 4; changeSize++) {

			var curveClass = ".curve" + changeSize + " h1";
			var originalLength = originalText[changeSize];
			for (var j = 0; j < 10; j++) {
				character = curveClass + " .char" + j;
				var add = -(originalLength / 2 * x) + (((originalLength * x) / (originalLength-1)) * j);
				$(character).css({transform:"rotate("+ add +"deg)"});
			};

		};
	}

	//first time rotating the social network links.....
	var x = 4;
	var originalText = ["Nothing"];
	var width = $(window).width();

	if((width < 800) && (width >= 650)){
			x = 3;
		} 

		else if((width < 650) && $(this).width() >= 500){
			x = 2.5;
		}

		else if(width < 500 ){
			x = 3;
		}

		else if(width >= 800){
			x = 4;
		}

	var counter = document.getElementByClass("social").childElementCount;
	for (var curveNo = 1; curveNo <= counter; curveNo++) {

		var curveClass = ".curve" + curveNo + " h1";
		
		
		var str = $(curveClass).html();

		originalText.push(str.length);

		var curved = '';
		for (var i = 0, len = str.length; i < len; i++) {
			curved += '<span class="char';
			curved += i;
			curved += '">';
			curved += str[i];
			curved += '</span>';
		}

		$(curveClass).html(curved);

		for (var j = 0; j < str.length; j++) {
			character = curveClass + " .char" + j;
			var add = -(str.length / 2 * x) + (((str.length * x) / (str.length-1)) * j);

			$(character).css({transform:"rotate("+ add +"deg)"});
		};

	};

	//window resize function......
	$(window).resize(function(){

		if($(this).width() < 600){
			$("#info").css({"top":"20%"});
		} 
		else
		{
			$("#info").css({"top":"35%"});
		}

		//handling the social sites curve
		if(($(this).width() < 800) && ($(this).width() >= 650)){
			x = 3;
			resize();
		} 

		else if(($(this).width() < 650) && $(this).width() >= 500){
			x = 2.5;
			resize();
		}

		else if($(this).width() < 500 ){
			x = 3;
			resize();
		}

		else if($(this).width() >= 800){
			x = 4;
			resize();
		}

		
	});

	



});