/**
 * Created by Administrator on 2017/1/14.
 */
$(function(){
    $("#lis-img img").each(function(index,dom) {
        //console.log($("#lis-img img"));
       // console.log($("#smallImage"))
        $("#lis-img img").click(function () {
            $("#smallImage").attr("src", ($(this)[0]).src);
            $("#bigImage").attr("src",($(this)[0]).src);
        })
    })
});
/*fangdajing*/
$(function(){
    $("#smallBox").mouseenter(function(){
        $("#smallView").css({display:"block"});
        $("#bigView").css({display:"block"});
        //小视窗跟随事件
        $(window).mousemove(function(e){
            e=e||window.event;
            var $left= e.pageX-$("#smallBox").offset().left-$("#smallView").outerWidth()/2
            var $top= e.pageY-$("#smallBox").offset().top-$("#smallView").outerHeight()/2
           // console.log($("#smallBox").offset().left)
       //判断边界
            if($left<0){$left=0}
            if($top<0){$top=0}
            if(($left+$("#smallView").outerWidth())>$("#smallBox").outerWidth()){
                $left=$("#smallBox").outerWidth()-$("#smallView").outerWidth();
            }
            if(($top+$("#smallView").outerHeight())>$("#smallBox").outerHeight()){
                $top=$("#smallBox").outerHeight()-$("#smallView").outerHeight()
            }
            $("#smallView").css({left:$left,top:$top});
//确定小视窗的宽高
            var $w=$("#bigView").outerWidth()*$("#smallImage").outerWidth()/$("#bigImage").outerWidth()
            var $h=$("#bigView").outerHeight()*$("#smallImage").outerHeight()/$("#bigImage").outerHeight()
            $("#smallView").css({width:$w,height:$h})
    //设置大图标的坐标
            var $bigleft=$("#smallView").position().left*$("#bigImage").outerWidth()/$("#smallImage").outerWidth()
            var $bigtop=$("#smallView").position().top*$("#bigImage").outerHeight()/$("#smallImage").outerHeight()

            $("#bigImage").css({left:-$bigleft,top:-$bigtop})
        })
    })
});
//鼠标离开时图片消失
$(function(){
    $("#smallBox").mouseleave(function(){
        $("#smallView").css("display","none");
        $("#bigView").css({display:"none"})
    })
})
//购物车加减
$(function(){
    var $num=$("#number").val();
    $("#shu-liang").click(function(){
        $num--
        if($num<1){
            $num=1
        }
    })
});
$(function(){
    var $num=$("#number").val();
    $("#shu-liang1").click(function(){
        $num++
    })
});