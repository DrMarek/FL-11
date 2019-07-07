var a1=0, a2=0, b1=0, b2=0, c1=0, c2=0, tmpx=0, tmpy=0;
var t=true, f=false;

alert("ATENTION! \n If you use float numbers plese write dot instead of comma");

a1=Number(prompt("input a(x)"));
a2=Number(prompt("input a(y)"));
b1=Number(prompt("input b(x)"));
b2=Number(prompt("input b(y)"));
c1=Number(prompt("input c(x)"));
c2=Number(prompt("input c(y)"));

tmpx=(a1+b1)/2;
tmpy=(a2+b2)/2;

if(tmpx==c1 && tmpy==c2){
    console.log(t);
}
else{
    console.log(f);
}