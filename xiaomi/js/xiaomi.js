//购物车显示隐藏
		$(".gouwuche").mouseover(function(){
			$(".gouwuche").css("background-color","#FBFEE9");
			$(".p1").css("color","#FF6700");
		    $(".gouwuche1").show();
	    })
	    $(".gouwuche").mouseout(function(){
	    	$(".gouwuche").css("background-color","#424242");
	    	$(".p1").css("color","#B0B0B0");
		    $(".gouwuche1").hide();
	    })

//鼠标移入
		$(".bar>li").mouseover(function(){
			$(this).find(".ul2").stop().slideDown();
		})

//鼠标移出
		$(".bar>li").mouseout(function(){
			$(this).find(".ul2").stop().slideUp();
		})

//显示与隐藏
		$(".aside-left>li").mouseover(function(){
			$(this).css("background-color","#FF6700");
		    $(this).find("ol").stop().show();
	    })
	    $(".aside-left>li").mouseout(function(){
	    	$(this).css("background-color","#0D0D0F");
		    $(this).find("ol").stop().hide();
	    })

//轮播图
		var index=0;
		var next=0;
		var timer=setInterval(fun1,3000);
		var width=$(".lunbo").width();
		console.log(width);

		function fun1()
		{
			next ++ ;
			if(next == 4)
			{
				next=-1;
			}
			//动画效果
			$(".lunbo ul>li").eq(next).css("left",width+"px");
			$(".lunbo ul>li").eq(index).stop().animate({"left":-width+"px"},1000);
			$(".lunbo ul>li").eq(next).stop().animate({"left":"0px"},1000);

			//样式
			$(".lunbo ol>li").eq(next).css("background-color","rgba(255,0,0,0.5)");
			$(".lunbo ol>li").eq(next).siblings().css("background-color","rgba(255,255,255,0.5)");

			index=next;
		}

		function fun2()
		{
			next ++ ;
			if(next == 4)
			{
				next=-1;
			}
			//动画效果
			$(".lunbo ul>li").eq(next).css("left",-width+"px");
			$(".lunbo ul>li").eq(index).stop().animate({"left":width+"px"},1000);
			$(".lunbo ul>li").eq(next).stop().animate({"left":"0px"},1000);

			//样式
			$(".lunbo ol>li").eq(next).css("background-color","rgba(255,0,0,0.5)");
			$(".lunbo ol>li").eq(next).siblings().css("background-color","rgba(255,255,255,0.5)");

			index=next;
		}

		//点击
		$(".lunbo ol>li").click(function(){
			clearInterval(timer);
			var $index=$(this).index();
			next=$index-1;
			fun1();
		})

		//鼠标移上去停止，移下来接着轮播
		$(".lunbo").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(fun1,3000);
		})

		//左右按钮的点击
		$(".left").click(function(){
			clearInterval(timer);
			fun2();
		})
		$(".right").click(function(){
			clearInterval(timer);
			fun1();
		})
