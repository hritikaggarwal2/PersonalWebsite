$(document).ready(function() {
	$(".slideSign").click(function(){
		$(".whole").css({left:"-105%"});
		setTimeout(function(){
			$(".whole").css({left:"-100%"});
		},1000);
	});

	$(".slideLog").click(function(){
		$(".whole").css({left:"5%"});
		setTimeout(function(){
			$(".whole").css({left:"0%"});
		},1000);
	});
})