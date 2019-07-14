function addOne(x){
    return x+1;
}

function pipe(num, ...someArg){
    let amount=1;
    for(let i=1; i<=someArg.length;i++){
        amount++;
    }
    return amount;
}

pipe(1, addOne,addOne,addOne,addOne,addOne,addOne,addOne,addOne,addOne,addOne);