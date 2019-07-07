let a=0, b=0, c=0;
let zero=0;

alert("ATENTION! \n If you use float numbers plese write dot instead of comma");

a=Number(prompt("Input a"));
b=Number(prompt("Input b"));
c=Number(prompt("Input c"));

if(a<=zero || b<=zero || c<=zero){
    console.log("Triangle doesn’t exist");
}else if(a===b && b===c && c===a){
    console.log("Eequivalent triangle");
}else if(a===b || b===c || c===a){
    console.log("Isosceles triangle");
}else{
    console.log("Normal triangle");
}
