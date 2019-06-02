(function(){

	window.addEventListener("load", init);

	function init() {
		// let projectContent = document.getElementsByClassName("p-content");
		// for (let i = 0; i < projectContent.length; i++) {
		// 	projects[i].firstElementChild.style.webkitTransform = "skewX(" + xPos + "deg) skewY(" + yPos + "deg)";
		// 	projects[i].firstElementChild.style.transform = "skewX(" + xPos + "deg) skewY(" + yPos + "deg)";
		// }

		var path = window.location.pathname;
		var page = path.split("/").pop();

		if (page === "index.html") {
			window.addEventListener("mousemove", perspective);
			window.addEventListener("scroll", bgPerspective);
			window.addEventListener("scroll", scrollCheck);
			
			scrollCheck();

			id("scroller").addEventListener("click", scrollNext);

			visible(qs("h1"), 500);
			visible(qs("header h6"), 800);
			visible(qs("header button"), 1100);
			visible(qs("header .fa-chevron-down"), 1400);

			
		} else {

		}

		
	}

	function scrollCheck() {
		if (window.scrollY !== 0) {
			let cover = qsa(".p-cover");
		
			for (let i = 0; i < cover.length; i++) {
				visible(cover[i], i * 100);
			}
		}		
	}

	function scrollNext() {
		window.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: 'smooth'
		});
	}

	function visible(element, time) {
		setTimeout(function() {
			element.style.opacity = "1";
			element.style.top = "0";
		}, time);
	}

	function perspective(e) {

		let xPos = e.clientX / screen.width * 1.5;
		let yPos = e.clientY / screen.height * 1.5;

		let projects = document.getElementsByClassName("p-img");
		for (let i = 0; i < projects.length; i++) {
			projects[i].firstElementChild.style.webkitTransform = "skewX(" + xPos + "deg) skewY(" + yPos + "deg)";
			projects[i].firstElementChild.style.transform = "skewX(" + xPos + "deg) skewY(" + yPos + "deg)";
		}
	}
 
	function bgPerspective() {

		let mainHeight = window.getComputedStyle(qs("header")).height;

		let pageY = window.pageYOffset;

		if (pageY < parseInt(mainHeight)) {
			let div = qs("header > div.container");
			div.style.marginTop = pageY + "px";
			div.style.opacity = 1 - pageY / parseInt(mainHeight);
		}

		if (pageY > 10) {
			qs("header .fa-chevron-down").style.opacity = 0;
		} else {
			qs("header .fa-chevron-down").style.opacity = 1;
		}
	}

	function id(idName) {
		return document.getElementById(idName);
	}

	function qs(query) {
		return document.querySelector(query);
	}

	function qsa(query) {
		return document.querySelectorAll(query);
	}

})();