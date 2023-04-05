$(document).ready(function ()
{
	$(".btn-mobile-menu__icon").click(function ()
	{
		"block" == $(".navigation-wrapper").css("display") ? ($(".navigation-wrapper").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function ()
		{
			$(".navigation-wrapper").toggleClass("visible animated bounceOutUp"), $(".navigation-wrapper").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend")
		}), $(".navigation-wrapper").toggleClass("animated bounceInDown animated bounceOutUp")) : $(".navigation-wrapper").toggleClass("visible animated bounceInDown"), $(".btn-mobile-menu__icon").toggleClass("iconfont NianBroken-zhankai iconfont NianBroken-shouqi animated fadeIn")
	}),
	$(".navigation-wrapper .blog-button").click(function ()

	{
		"block" == $(".navigation-wrapper").css("display") && ($(".navigation-wrapper").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function ()
		{
			$(".navigation-wrapper").toggleClass("visible animated bounceOutUp"), $(".navigation-wrapper").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend")
		}), $(".navigation-wrapper").toggleClass("animated bounceInDown animated bounceOutUp")), $(".btn-mobile-menu__icon").toggleClass("iconfont NianBroken-zhankai iconfont NianBroken-shouqi animated fadeIn")
	});
	
	$(".panel-cover__logo").click(function(){
	    console.log("hhhh")
	    var img_value = $(this).attr("value");
	    console.log(img_value)
	    if (img_value == "white"){
	        $("body").css("background-color","#828986");
	        $(this).attr("value","gray");
	    }else{
	    $("body").css("background-color","white");
        $(this).attr("value","white");
	    }

      });
});