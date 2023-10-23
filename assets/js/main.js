$(document).ready(function ()
{
	$(".btn-mobile-menu__icon, .panel-cover__description").click(function ()
	{
	    console.log($(".navigation-wrapper").css("display"))
		"block" == $(".navigation-wrapper").css("display") ?
		$(".navigation-wrapper").toggleClass("visible animated bounceOutUp")
		: $(".navigation-wrapper").toggleClass("visible animated bounceInDown"), $(".btn-mobile-menu__icon").toggleClass("iconfont likunyu-zhankai iconfont likunyu-shouqi animated fadeIn")

	}),


        //点击头像改变背景颜色
	   $(".panel-cover__logo, .panel-cover__title").click(function(){
	    console.log("hhhh")
	    var img_value = $(".panel-cover__logo").attr("value");
	    console.log(img_value)
	    if (img_value == "white"){
	        $("body").css("background-color","#828986");
	        $(".panel-cover__logo").attr("value","gray");
	    }else{
	    $("body").css("background-color","white");
        $(".panel-cover__logo").attr("value","white");
	    }
      });

       $(".copyright").click(function(){
//      	    console.log("加油呀")
      	    Toast("你是最棒的，加油~",1000)
            });

       $(".contactMe").click(function(){
             	    console.log("contact me");
             	    Toast("发暗号：可乐加冰",3000);
             	    Toast("在公众号：李坤雨",1500);
                   });

       $(function () {
             if(!window.localStorage.getItem('first_toast')){
                   setTimeout(function () {
                                   toast_str = "点击头像有惊喜哦😄";
                                   if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                                   toast_str = "点击顶部导航有惊喜😄"
                                   };
                                   Toast(toast_str,2000);}, 2000);
                   window.localStorage.setItem('first_toast','true')};


        });

       $(".panel-cover__description").click(function(){
            if (isWap()){
            var img_value = $(".panel-cover__logo").attr("value");
                            	    console.log(img_value)
                            	    if (img_value == "white"){
                            	        $("body").css("background-color","#828986");
                            	        $(".panel-cover__logo").attr("value","gray");
                            	    }else{
                            	    $("body").css("background-color","white");
                                    $(".panel-cover__logo").attr("value","white");
                            	    }
            }


                   });

       //界面toast提示
       /*使用方法 Toast('这是一个弹框',2000)*/
       function Toast(msg, duration) {
       	duration = isNaN(duration) ? 3000 : duration;
       	var m = document.createElement('div');
       	m.innerHTML = msg;
       	m.style.cssText = "font-family:siyuan;max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
       	document.body.appendChild(m);
       	setTimeout(function() {
       		var d = 0.5;
       		m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
       		m.style.opacity = '0';
       		setTimeout(function() {
       			document.body.removeChild(m)
       		}, d * 1000);
       	}, duration);
       }
       function isWap() {
                   var userAgentInfo = navigator.userAgent;
                   var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
                   var flag = true;
                   for (var v = 0; v < Agents.length; v++) {
                       if (userAgentInfo.indexOf(Agents[v]) > 0) {
                           flag = false;
                           break;
                       }
                   }
                   return flag;
               }

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