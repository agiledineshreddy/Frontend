var n=153;
let a=0;
var d=n;
let b=0;
let e=0;
let f=0;

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
console.log(f)

if(f==n)
{
    console.log("armstrong Number")
}
else
console.log("not armstrong")



