/**
 * Created by Administrator on 2017/1/7.
 */
$(function(){
    $(".title").mouseover(function(){
        $("#lie").stop().css({display:"block"})
    });
    $(".title").mouseleave(function(){
        $("#lie").stop().css({display:"none"})
    })
});
$(function(){
    var $lis=$("#lie li");
   // console.log($lis);
    var $divs=$("#lie div");
   //console.log($divs);
   $lis.each(function(index,dom){
       $lis.hover(function(){
           $divs.hide();
           $divs.eq($(this).index()).show();
       },function(){
           $divs.eq($(this).index()).hide();
       })
   })
});
//营养保健的变换
$(function(){
    //获取li
    var $li=$(".li-1");
    //console.log($li);
    var $div=$(".div-1");
    //console.log($div);
    $li.each(function(index,dom){
        $li.hover(function(){
            $div.hide();
            $div.eq($(this).index() - 2).show();
        },function(){
            $div.eq($(this).index()-2).hide();
        })
    })
});
//小图标的切换
$(function(){
$(".bg-tu").hover(function(){
    $(".hover-left").fadeIn(1000);
    $(".hover-right").fadeIn(1000)
},function(){
    $(".hover-left").fadeOut(1000);
    $(".hover-right").fadeOut(1000)
  })
});
//轮播图切换
var times;
var $index=0;
var $width=$(".bg-tu2").outerWidth();
function lun(){
    times=setInterval(function(){
        $(".bg-tu1").animate({left:"-1419px"},1000);
        $(".bg-tu2").animate({left:"0"},1000);
        $(".bg-tu3").animate({left:"0"},3000);
        if($index>2){$index=0}
        $index++
    },3000);

}
lun();
$(function(){
   $(".a1").click(function(){
   })
});
//图片划过
$(function(){
    $(".new-uu li").each(function(index,dom){
        $(".new-uu li").hover(function(){
            $(".new-uu div").show();
            $(".new-uu div").eq($(this).index()).hide();
        },function(){
            $(".new-uu div").hide();
        })
    })
});
//图片划过选项卡效果
$(function(){
    $(".f2 li").each(function(index,dem){
        $(".f2 li").hover(function(){
            $("#bli").removeClass("ll1");
            $(".tu-ku1").hide();
            $(".tu-ku1").eq($(this).index()).show();
           $(this).addClass("ll1")
        },function(){
            $(this).removeClass("ll1")
        })

    })
});
/*滚动条*/

$(function(){
    $(document).scroll(function(){
        var $top=$(window).scrollTop();
       // console.log($top);
        if($top>600){
                $("#scroll-top").fadeIn(1000)
        }else{
            $("#scroll-top").fadeOut(1000)
        }
    })
});
/*图片滚条效果*/
$(function(){
    $(".photo li").each(function(index,dom){
        $(".photo li").hover(function(){
            //$(".n1").hide();
            //$(".n2").hide();
            $(".n1").eq($(this).index()).fadeIn(500);
            $(".n2").eq($(this).index()).stop().show().animate({left:"0"},400);
        },function(){
            $(".n1").eq($(this).index()).fadeOut(100);
            $(".n2").eq($(this).index()).stop().animate({left:"-385"},10).hide();
        })
    })
});