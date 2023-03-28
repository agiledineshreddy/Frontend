var b=121
var d=0
var r=b;
while(b!=0)
{
let c=(b%10);
d=d*10+c
var b=parseInt(b/10);
}
if(d==r){
    console.log("palindrome")
}
else
    console.log("not palindrome")
