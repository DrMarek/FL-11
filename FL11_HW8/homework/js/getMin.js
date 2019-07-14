function minNum(num){
    let min=0;
    if(num%1!==0){
        alert(false);
    }else{
        let mass = new Array(num);
        for(let i =0;i<mass.length;i++){
            mass[i]= -10 +Math.random() * (10+1- -10);
            mass[i]=Math.floor(mass[i]);
        }
        min=mass[0];
        for(let j =0; j<mass.length;j++){
            if(mass[j]<min){
                min=mass[j];
            }
        }
        
    }
    return min;
}