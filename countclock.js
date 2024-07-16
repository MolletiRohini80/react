var x=window.prompt("enter a countdown number");
var h=x;
var m=45;
var s=59;
var timer=null;
document.getElementsByClassName("hours")[0].innerHTML=h;
document.getElementsByClassName("minutes")[0].innerHTML=m;
document.getElementsByClassName("seconds")[0].innerHTML=s;
function fun(){
    document.getElementsByClassName("hours")[0].innerHTML=h;
    document.getElementsByClassName("minutes")[0].innerHTML=m;
    document.getElementsByClassName("seconds")[0].innerHTML=s;
    if(h==0){
        clearInterval(timer);
        timer=null;
    }
    s--;
    if(s==0){
        m--;
        s=59;
        if(m==0){
            h--;
            m=45;
        }
    }
}
function disstart(){
    if(timer==null){
        timer=setInterval(fun,1000);
    }
}
function disstop(){
    if(timer!=null){
        clearInterval(timer);
        timer=null;
    }
}
function disreset(){
    disstop();
    h=0;
    s=0;
    m=0;
    fun();
}