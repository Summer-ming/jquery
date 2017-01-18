/**
 * Created by Administrator on 2017/1/11.
 */
//设置封装函数
/*function countDown(endtime,showdom){
    var $times=setInterval(function(){
        var $date=new Date();
        var $endDate=new Date(endtime);
        var $dis=$endDate-$date;
        var $day=Math.floor($dis/1000/60/60/24);
        var $h=Math.floor($dis/1000/60/60%24);
        var $m=Math.floor($dis/1000/60%60);
        var $s=Math.floor($dis/1000%60);
        //var ms=Math.floor(dis%1000);
        if($s<10){$s="0"+ $s}
        //if(ms<10){ms="0"+ms}
        //if(ms<100){ms="0"+ms}
        var $tt=$day + "天" + $h +"小时"+ $m +"分钟"+ $s+"秒";
        showdom.text($tt);
    },10)
}*/
function countDown(endtime){
    var $time=setInterval(function(){
        var $date=new Date();
        var $endDate=new Date(endtime);
        var $dis=$endDate-$date;
        var $day=Math.floor($dis/1000/60/60/24);
        var $h=Math.floor($dis/1000/60/60%24);
        var $m=Math.floor($dis/1000/60%60);
        var $s=Math.floor($dis/1000%60);
        if($s<10){$s="0"+ $s}
        $(".j1").text($day);
        $(".j2").text($h);
        $(".j3").text($m);
        $(".j4").text($s);
        $("#y1").text($day);
        $("#y2").text($h);
        $("#y3").text($m);
        $("#y4").text($s);

    },10)
}
$(function(){

    countDown("2017 1/19 00:00");

});