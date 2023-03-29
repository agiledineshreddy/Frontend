
function arm(){
    var n=0;

n=document.getElementById("num").value;
let a=0;
var d=n;
let b=0;
let e=0;
let f=0;
let g=0;
if(n>9&&n<100){
    while(d>0)
    {
        var c=d%10;
        d=parseInt(d/10);  
        if(d==parseInt(n/10)) 
        {
        a=c*c;  
        }
        if(d==parseInt(n/100))
        {
            b=c*c;
        } 
    }
    f=a+b;
    if(f==n)
    {
        document.getElementById("display").value="armstrong number";
    }
    else
    document.getElementById("display").value="not arstrong number";
    }
if(n>99&&n<1000){
while(d>0)
{
    var c=d%10;
    d=parseInt(d/10);  
    if(d==parseInt(n/10)) 
    {
    a=c*c*c;  
    }
    if(d==parseInt(n/100))
    {
        b=c*c*c;
    }
    if(d==parseInt(n/1000))
    {
        e=c*c*c;
    }
    
    
}
f=a+b+e;


if(f==n)
{
    document.getElementById("display").value="armstrong number";
}
else
document.getElementById("display").value="not arstrong number";
}

if(n>999&&n<10000){
    while(d>0)
    {
        var c=d%10;
        d=parseInt(d/10);  
        if(d==parseInt(n/10)) 
        {
        a=c*c*c*c;  
        }
        if(d==parseInt(n/100))
        {
            b=c*c*c*c;
        }
        if(d==parseInt(n/1000))
        {
            e=c*c*c*c;
        }
        if(d==parseInt(n/10000))
        {
            g=c*c*c*c;
        }
        
        
        
    }
    f=a+b+e+g;
    
    if(f==n)
    {
        document.getElementById("display").value="armstrong number";
    }
    else
    document.getElementById("display").value="not arstrong number";
    }
    

}

