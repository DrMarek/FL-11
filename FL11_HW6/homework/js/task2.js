let a=0, b=0, c=0;

a=Number(prompt("Input a"));
b=Number(prompt("Input b"));
c=Number(prompt("Input c"));

if(a<=0 || b<=0 || c<=0){
    console.log("Triangle doesn’t exist");
}
else if(a===b && b===c && c===a){
    console.log("Eequivalent triangle");
}
else if(a===b || b===c || c===a){
    console.log("Isosceles triangle");
}
else{
    console.log("Normal triangle");
}
