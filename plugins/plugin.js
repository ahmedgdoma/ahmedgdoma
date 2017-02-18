
$(function(){
    



    $(".projects ul li").click(function () {
    	$(this).addClass("selected").siblings().removeClass("selected");
    });
	$(" section, footer, .personal img, .personal h1, .personal h4, .personal p").hide();
	$(".loading").show();
	$(".loading").height($(window).height());

    $(window).load(function() {

		$(".loading").fadeOut("slow",function(){
			$(".loading , link:last-of-type").remove();
		$(".personal, .personal img").fadeIn(2000,
					function () {
						$(".personal").find("h1, span, h4").fadeIn(1,
							function() {
								$(".phead span").typed({
						            strings: ["ahmed doma"],
						            startDelay: 80,
						            typeSpeed: 70,
						            shuffle: true,
						            showCursor: false,
						            callback: 
						            	function () {
						            		$(".leading").typed({
						            		strings: ["ui developer"],
								            startDelay: 50,
								            typeSpeed: 70,
								            shuffle: true,
								            showCursor: false,
								            callback: 
								            	function () {
								            		$(".personal").find("p").fadeIn(1000,
								            			function () {
								            				$("section, footer").delay(1500).slideDown(2000,
								            					function() {
								            						$('#Container').mixItUp();
								            						$("html").getNiceScroll().resize();
								            					});
								            			});
								            	}
								        	});
            							}
        						});
							});
					});
		});
    	     
    });

	/* nicescroll */
	$("html").niceScroll({
		cursorcolor: "#19253d",
		cursorborder: "#19253d",
		cursorwidth: 15,
		scrollspeed: 80
	});


	$(".personal h1 span").on({
		"mouseenter": function(){
			$(this).text("ahmed mohamed gamal");
		},
		"mouseleave": function() {
			$(this).text("ahmed doma");
		}});

	
	$(".hobbies .hobby span").on({
		"mouseenter": function(){
			$(this).siblings("i").addClass("select");
		},
		"mouseleave": function(){
			$(this).siblings("i").removeClass("select");
		}
	});

});