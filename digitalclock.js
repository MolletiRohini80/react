var h=0;
var m=0;
var s=0;
var timer=null;
function unit(a){
    if(a<10){
        return '0'+a;
    }
    else{
        return a;
    }
}

function fun(){
    var x=new Date();
    document.getElementsByClassName("hours")[0].innerHTML=unit(h);
document.getElementsByClassName("minutes")[0].innerHTML=unit(m);
document.getElementsByClassName("a")[0].innerHTML=unit(s);
    if(x.getSeconds){
        // document.getElementsByClassName("a")[0].innerHTML = s;
        s++;
        if(s==60){
            // document.getElementsByClassName("minutes")[0].innerHTML = m; 
            m++;
            s=0;
            if(m==45){
                // document.getElementsByClassName("hours")[0].innerHTML = h;
                h++;
                m=0;
            }
        }
    }
}
function displaystart(){
    if(timer==null){
    timer=setInterval(fun,1000);
    }
}
function displaystop(){
    if(timer!=null){
        clearInterval(timer);
        timer=null;
    }
}
function displayreset(){
    displaystop();
    h=0;
    s=0;
    m=0;
    fun();
}
