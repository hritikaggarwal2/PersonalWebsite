$(window).on('load', function() {
    $("#particles-js").css({"width":"0%", "height":"0%"});
    $(".loader").css({width:"100%", opacity:"0"});

});

$(document).ready(function() {

    setTimeout(function loaderRemover(){
        $(".loader").css({display:"none"});
        $("body, html").css({overflow:"visible"});
    }, 500);

    setTimeout(function particle(){
        $("#particles-js").css({
            width: "100%",
            height: "100%",
            opacity : "1"
        });  
    }, 500);

    setTimeout(function opacityChanger(){
        $(".section1 h6").css({
            opacity : "1",
            top : "0px"
        });  
    }, 1000);

    setTimeout(function opacityChanger(){
        $(".section1 h1").css({
            opacity : "1",
            top : "0px"
        });  
    }, 1500);

    setTimeout(function opacityChanger(){
        $(".section1 h4").css({
            opacity : "1",
            top : "0px",
        });  
    }, 2000);

    setTimeout(function opacityChanger(){
        $(".section1 h4").css({
            color : "#111"
        });  
    }, 2500);

    setTimeout(function opacityChanger(){
        $(".section1 img").css({
            opacity : "1",
            top : 0
        });  
    }, 3000);

    setTimeout(function opacityChanger(){
        $(".section1 button").css({
            opacity : "1",
        });  
    }, 3500);


    $(window).scroll(function() {
        winodw_height = $(window).height();
        top_load_pos = 3 * winodw_height / 4;

        var a = $(".section2").offset().top;
        if ($(window).scrollTop() >= a - top_load_pos) {
            $(".section2 h2").css({opacity: 1});
        }

        for (var i = 1; i <= 5; i++) {
            var wid = ".p" + i;
            if($(window).scrollTop() >= $(wid).offset().top - top_load_pos) {
                $(wid + " .det h3").css({opacity: "1",top: "0"});
                $(wid + " .det h5").css({opacity: "1",top: "0"});
                $(wid + " .det p").css({opacity: "1",top: "0"});
                $(wid + " img").css({opacity: "1",top: "0"});
                $(wid + " h3 img").css({opacity: ".1",top: "0"});
                $(wid + " .det .line").css({width: "30px"});
            }
        }

        var a = $(".section25").offset().top;
        if ($(window).scrollTop() >= a - top_load_pos - 100) {
            $(".section25 h5").css({opacity: 1, top:0});
            $(".section25 .small-project dot").css({opacity: 1});
            $(".section25 .small-project-img").css({opacity: 1, top:0});
            $(".section25 .small-project h6").css({opacity: 1, left:0});
            $(".section25 .small-project span").css({opacity: 1, left:0});
        }

        var a = $(".section3").offset().top;
        if($(window).scrollTop() >= a - top_load_pos) {
            $(".section3 h3").css({opacity: 1, top: "0px"});
            $(".section3 h6").css({opacity: 1, top: "0px"});

            var i = 1;
            var f = setInterval(function opacityChanger(){

                    var cl = ".section3 div .a" + i;

                    $(cl).css({
                        opacity : 1,
                        top : "0px"
                    });
                    if (i == 5) {
                        clearInterval(f);
                    }
                    i++;

                }, 200);

            setTimeout(function opacityChanger(){
                $(".section3 p").css({
                    opacity : ".9",
                    top : "0px"
                });  

                $(".section3 dot").css({
                    opacity : "1",
                    top : "0px"
                });
            },  1200);

        }
    });

});