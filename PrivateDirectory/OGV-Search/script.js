$(document).ready(function(){
	

	categories = ["cone shapes","disc torus shapes","pieces chess","king chess pieces","monkey animals","cylinder shapes","pencil objects","torch objects","top beyblade objects","monkey animal","cone shapes","pieces chess"]
	searchText = "Browse Works";

	$(window).keydown(function(e){
		flag = 0;
		if($(".search").is(":focus") && e.keyCode == 13)
		{

			
			$(".categories button").css({color:"#aaa",border: "1px solid #aaa"});
			searchText = $('.search').val().toLowerCase();

			if(jQuery.trim(searchText).length > 0)
			{

				display();
			}
			else
			{
				searchText = "Browse Works";
				$(".section1 h1").html(searchText);
				$(".showcase").css({display:"inline"});
				$(".results").css({display:"none"});
			}


		}
	});

	//category button click
	$(".categories button").click(function(){

		$(".categories button").css({color:"#aaa",border: "1px solid #aaa"});
		$(this).css({color:"#777",border: "1px solid #777"});
		searchText = $(this).html().toLowerCase();
		$('.search').val(searchText);

		display();

	});




	//favourites 
	listLikes = [false,false,false,false,false,false,false,false,false,false,false,false,false]
	
	
	checkLikes();

	function display()
	{
		$(".results .boxy").html('');
		$(".section1 h1").html(searchText);
		$(".showcase").css({display:"none"});
		$(".results").css({display:"inline"});
		for(i = 0; i < 12; i++)
		{
			match = 0;
			for(k = 0; k < categories[i].split(' ').length; k++)
			{
				for(j = 0; j < jQuery.trim(searchText).length; j++)
				{
					if(searchText.split('')[j] == categories[i].split(' ')[k].split('')[j])
					{
						match++;
						
					}
					else
					{
						break;
					}
				}
			}
			

			if(match == jQuery.trim(searchText).length)
			{

				var appendText = $((".b" + (i + 1))).html();
				appendText = "<div class='box b" + (i + 1) + "' style='background:url(shapes/" + categories[i].split(' ')[0] +".png) 50% 50% no-repeat;background-size: contain;'>" + appendText + "</div>";
				$(".results .boxy").append(appendText);
				
				checkLikes();
				addFav();


				flag = 1;
			}
		}


		if(flag != 0)
		{
			$(".results h5").css({opacity:"0",margin:"20px auto"});
		}
		else
		{
			$(".results h5").css({opacity:"1",margin:"60px auto"});

		}

	}







	changeOnce = [false,false,false,false,false,false,false,false,false,false,false,false,false];


//add or remove fav
	$(".add").click(function(){
		boxClassNo = $(this).parent().parent().parent().parent().attr('class').split(' ')[1].split("b")[1];
		
		if(this.className.split(' ')[1])
		{		
			addFav();
		}
		else
		{
			removeFav();
		}

		changeOnce[boxClassNo] = false;
		
	});


	function addFav()
	{
		//code to unselect
		

			if(changeOnce[boxClassNo] == false)
			{
				$((".b" + boxClassNo + " .black .top .favourite .add")).removeClass("selected");
				getHtml = $((".b" + boxClassNo)).html();
				getHtml = "<div class='box b" + boxClassNo + "' style='background:url(shapes/" + categories[boxClassNo - 1].split(' ')[0] +".png) 50% 50% no-repeat;background-size: contain;'>" + getHtml + "</div>";
				$((".fav .b" + boxClassNo)).remove();
				$(".pop").append(getHtml);
				changeOnce[boxClassNo] = true;
				checkLikes();
				addFav();
				removeFav();

			}


	}
		
	function removeFav()
	{
			//code to select

			if(changeOnce[boxClassNo] == false)
			{
				$((".b" + boxClassNo + " .black .top .favourite .add")).addClass("selected");
				getHtml = $((".b" + boxClassNo)).html();
				getHtml = "<div class='box b" + boxClassNo + "' style='background:url(shapes/" + categories[boxClassNo - 1].split(' ')[0] +".png) 50% 50% no-repeat;background-size: contain;'>" + getHtml + "</div>";
				$((".pop .b" + boxClassNo)).remove();
				$(".fav").append(getHtml);
				
				changeOnce[boxClassNo] = true;

				checkLikes();
				addFav();
				removeFav();
			}

	}

	function checkLikes()
	{
		$(".love").click(function(){
			var myClass = this.className;
			myClass = myClass.split(' ');
			
			if(listLikes[(myClass[1].split("ll")[1])] == false)
			{
				editClass = "." + myClass[1] + " .no";
				editClass = "." + myClass[1] + " .no";
				currLikes = $(editClass).html();
				$(editClass).html(parseInt(currLikes) + 1);
				listLikes[(myClass[1].split("ll")[1])] = true;

				$(("." + myClass[1] + " .no")).css({color:"#fff"});
				$(("." + myClass[1])).css({background:"#c93356"});
				$(("." + myClass[1] + " img")).attr("src", "heartWhite.png")

			}
			else if (listLikes[(myClass[1].split("ll")[1])] == true)
			{
				editClass = "." + myClass[1] + " .no";
				editClass = "." + myClass[1] + " .no";
				currLikes = $(editClass).html();
				$(editClass).html(parseInt(currLikes) - 1);
				listLikes[(myClass[1].split("ll")[1])] = false;

				$(("." + myClass[1] + " .no")).css({color:"#111"});
				$(("." + myClass[1])).css({background:"#eee"});
				$(("." + myClass[1] + " img")).attr("src", "heart.png")

			}
		});
	}

	




	//  UPLOADER 

	clNames = ["","bb1","bb2","bb3","bb4","bb5","bb6","bb7","bb8","bb9"]     
	click = 0;
	$(".box2").click(function(){
		if (click == 0){
			clName = "." + this.className.split(' ')[1];
			clNo = this.className.split(' ')[1].split('')[2];

			for(nno = 1; nno < 10; nno++)
			{
				if (nno != clNo)
				{
					$(("." + clNames[nno])).css({display:"none"});
				}
			}
			
			$(clName).css({width:"100%"});
			setTimeout(function(){
				$(".model").css({transform: "scale(1)",opacity:"1"})
			},1000);

			click = 1;
		}

		else if (click == 1){
			clName = "." + this.className.split(' ')[1];
			clNo = this.className.split(' ')[1].split('')[2];
			
			$(".model").css({transform: "scale(0)",opacity:"0"})
			setTimeout(function(){

				for(nno = 1; nno < 10; nno++)
				{
					if (nno != clNo)
					{
						$(("." + clNames[nno])).css({display:"inherit"});
					}
				}
			},500);


			$(clName).css({width:"200px"});
			
			
			

			click = 0;
		}
		
	});


});