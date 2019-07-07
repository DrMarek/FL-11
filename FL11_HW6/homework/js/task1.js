alert("ATENTION! \n If you use float numbers plese write dot instead of comma");

let a1=Number(prompt("input a(x)"));
let a2=Number(prompt("input a(y)"));
let b1=Number(prompt("input b(x)"));
let b2=Number(prompt("input b(y)"));
let c1=Number(prompt("input c(x)"));
let c2=Number(prompt("input c(y)"));
let divide=2;
let t= true;
let f= false;
let tmpx=(a1+b1)/divide;
let tmpy=(a2+b2)/divide;


if(tmpx===c1 && tmpy===c2){
    console.log(t);
}else{
    console.log(f);
}
