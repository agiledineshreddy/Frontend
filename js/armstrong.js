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
    a=a+c*c*c;  
    }
    
if(a==n)
{
    console.log("armstrong Number")
}
else
console.log("not armstrong")



