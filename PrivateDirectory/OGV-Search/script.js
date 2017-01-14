$(document).ready(function(){
	

	categories = ["cone shapes","disc torus shapes","pieces chess","king chess pieces","monkey animal","cylinder shapes","pencil","torch","top beyblade","monkey animal","cone shapes","pieces chess"]
	searchText = "Online Geometry Viewer";
	$(window).keydown(function(e){
		flag = 0;
		if($(".search").is(":focus") && e.keyCode == 13)
		{

			

			searchText = $('.search').val().toLowerCase();

			if(jQuery.trim(searchText).length > 0)
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
						appendText = "<div class='box b" + (i + 1) + "' style='background:url(shapes/" + categories[i].split(' ')[0] +".png) 50% 50% no-repeat;background-size: cover;'>" + appendText + "</div>";
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
			else
			{
				searchText = "Online Geometry Viewer";
				$(".section1 h1").html(searchText);
				$(".showcase").css({display:"inline"});
				$(".results").css({display:"none"});
			}


		}
	});


	//favourites 
	listLikes = [false,false,false,false,false,false,false,false,false,false,false,false,false]
	checkLikes();
	addFav();
	//add or remove fav
	function addFav()
	{
		$(".add").click(function(){
			if(this.className.split(' ')[1])
			{
				//code to unselect
				boxClassNo = $(this).parent().parent().parent().parent().attr('class').split(' ')[1].split("b")[1];
				$((".b" + boxClassNo + " .black .top .favourite .add")).removeClass("selected");
				getHtml = $((".b" + boxClassNo)).html();
				getHtml = "<div class='box b" + boxClassNo + "' style='background:url(shapes/" + categories[boxClassNo - 1].split(' ')[0] +".png) 50% 50% no-repeat;background-size: cover;'>" + getHtml + "</div>";
				$((".fav .b" + boxClassNo)).remove();
				$(".pop").append(getHtml);
				checkLikes();
				addFav();
			}
			else
			{
				//code to select
				boxClassNo = $(this).parent().parent().parent().parent().attr('class').split(' ')[1].split("b")[1];
				$((".b" + boxClassNo + " .black .top .favourite .add")).addClass("selected");
				getHtml = $((".b" + boxClassNo)).html();
				getHtml = "<div class='box b" + boxClassNo + "' style='background:url(shapes/" + categories[boxClassNo - 1].split(' ')[0] +".png) 50% 50% no-repeat;background-size: cover;'>" + getHtml + "</div>";
				$((".pop .b" + boxClassNo)).remove();
				$(".fav").append(getHtml);
				checkLikes();
				addFav();
			}

	});
	}

	function checkLikes()
	{
		$(".love").click(function(){
			var myClass = this.className;
			myClass = myClass.split(' ');
			
			if(listLikes[(myClass[1].split("ll")[1])] == false)
			{
				console.log("ASDASD");
				editClass = "." + myClass[1] + " .no";
				editClass = "." + myClass[1] + " .no";
				currLikes = $(editClass).html();
				$(editClass).html(parseInt(currLikes) + 1);
				listLikes[(myClass[1].split("ll")[1])] = true;
			}
			else if (listLikes[(myClass[1].split("ll")[1])] == true)
			{
				$(".popup").css({bottom:"30px"});
				setTimeout(function(){
					$(".popup").css({bottom:"-30px"});
				},1000);
			}
		});
	}



});