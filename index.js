(function() {
    "use strict";

    window.addEventListener("load", init);
    window.addEventListener("scroll", scroll);
    
    function init() {
        // setting the stage before starting the show
        $("#particles-js").css({
            width: "0%",
            height: "0%"
        });

        $(".loader").css({
            width: "100%",
            opacity: "0"
        });

        // remove loading splash screen + add particles to the screen
        delay(500, removeLoader, addParticles);

        delay(1000, addHi);
        delay(1500, addName);
        delay(2000, addDesig);
        delay(2500, addDesigCol);
        delay(3000, addPhoto);
        delay(3500, addResume);

    }

    function scroll(e) {
        let top_load_pos = 3 * window.innerHeight / 4;

        // what if scroll reaches at the bottom 
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            top_load_pos = document.body.offsetHeight;
        }

        if (window.scrollY >= $(".section2").offset().top - top_load_pos) {
            $(".section2 h2").css({opacity: 1});
        }

        for (let i = 1; i <= 8; i++) {
            let wid = ".p" + i;
            if(window.scrollY >= $(wid).offset().top - top_load_pos) {
                $(wid + " .det h3").css({opacity: "1", top: "0"});
                $(wid + " .det h5").css({opacity: "1", top: "0"});
                $(wid + " .det p").css({opacity: "1", top: "0"});
                $(wid + " img").css({opacity: "1", top: "0"});
                $(wid + " h3 img").css({opacity: ".1", top: "0"});
                $(wid + " .det .line").css({width: "30px"});
            }
        }

        if ($(window).scrollTop() >= $(".section25").offset().top - top_load_pos) {
            $(".section25 h5").css({opacity: 1, top:0});
            $(".section25 .small-project dot").css({opacity: 1});
            $(".section25 .small-project-img").css({opacity: 1, top:0});
            $(".section25 .small-project h6").css({opacity: 1, left:0});
            $(".section25 .small-project span").css({opacity: 1, left:0});
        }

        if(window.scrollY >= $(".section3").offset().top - top_load_pos) {
            $(".section3 h3").css({opacity: 1, top: "0px"});
            $(".section3 h6").css({opacity: 1, top: "0px"});

            let i = 1;
            let f = setInterval(() => {
                $(".section3 div .a" + i).css({
                    opacity : 1,
                    top : "0px"
                });

                if (i++ == 5)
                    clearInterval(f);

            }, 200);

            delay(1200, addFooter);
        }
        
    }

    function delay(time, ...fnc) {
        setTimeout(() => {
            for (let i = 0; i < fnc.length; i++) {
                fnc[i]();
            }  
        }, time);
    }

    function removeLoader() {
        $(".loader").css({
            display: "none"
        });

        $("body, html").css({
            overflow: "visible"
        });
    }

    function addParticles() {
        $("#particles-js").css({
            width: "100%",
            height: "100%",
            opacity: 1
        });
    }

    function addHi() {
        $(".section1 h6").css({
            opacity: "1",
            top: "0px"
        }); 
    }

    function addName() {
        $(".section1 h1").css({
            opacity: "1",
            top: "0px"
        });  
    }

    function addDesig() {
        $(".section1 h4").css({
            opacity : "1",
            top : "0px",
        });
    }

    function addDesigCol() {
        $(".section1 h4").css({
            color : "#111"
        });  
    }

    function addPhoto() {
        $(".section1 img").css({
            opacity : "1",
            top : 0,
            animation: "slowMoves 3s infinite"
        });
    }

    function addResume() {
        $(".section1 button").css({
            opacity : "1",
        });
    }

    function addFooter() {
        $(".section3 p").css({
            opacity : ".9",
            top : "0px"
        });  

        $(".section3 dot").css({
            opacity : "1",
            top : "0px"
        });
    }

})();