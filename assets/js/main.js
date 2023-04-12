$(document).ready(function ()
{
	$(".btn-mobile-menu__icon").click(function ()
	{
		"block" == $(".navigation-wrapper").css("display") ?
		$(".navigation-wrapper").toggleClass("visible animated bounceOutUp")
		: $(".navigation-wrapper").toggleClass("visible animated bounceInDown"), $(".btn-mobile-menu__icon").toggleClass("iconfont likunyu-zhankai iconfont likunyu-shouqi animated fadeIn")

	}),

	$("body").on("touchstart", function (e) {
       e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $("body").on("touchmove", function (e) {
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;

//        if (Math.abs(X) > Math.abs(Y) && X > 0) {
//            alert("向右滑动");
//        }
//        else if (Math.abs(X) > Math.abs(Y) && X < 0) {
//            alert("向左滑动");
//        }
        if (Math.abs(Y) > Math.abs(X) && Y > 0) {
            console.log("向上滑动");
            $(".navigation-wrapper").toggleClass("visible animated bounceInDown"), $(".btn-mobile-menu__icon").toggleClass("iconfont likunyu-zhankai iconfont likunyu-shouqi animated fadeIn")
        }
        else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
            console.log("向下滑动");
            		$(".navigation-wrapper").toggleClass("visible animated bounceOutUp")
        }
        else {
            console.log("触控");
        }
    });

    //点击头像改变背景颜色
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
//      $(".panel-cover__description").click(function(){
//      	    console.log("hhhh")
//      	    window.location.href = "http://likunyu.com/hi";
//            });
      $(document).keyup(function(event){
             switch(event.keyCode) {
             case 32:
             	    var img_value = $(".panel-cover__logo").attr("value");
             	    if (img_value == "white"){
             	        $("body").css("background-color","#828986");
             	        $(".panel-cover__logo").attr("value","gray");
             	    }else{
             	    $("body").css("background-color","white");
                     $(".panel-cover__logo").attr("value","white");
             return;
             }}
       });
});