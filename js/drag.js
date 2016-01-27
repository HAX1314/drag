/**
 * Created by XiaHao on 2016/1/25.
 */
function drag(){
    var obj = document.getElementById("div1");
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(){
        disX = ev.pageX-obj.offsetLeft;
        disY = ev.pageY-obj.offsetTop;
        document.onmousemove = function(ev){
            obj.style.left = ev.clinetX - disX + 'px';
            obj.style.top = ev.clinetY - disY + 'px';
        }
    }
}