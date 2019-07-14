function revNum(num){
    let res =0;
    if(num<0){
        num*=-1;
        while(num){
            res = res *10+ num %10;
            num=Math.floor(num/10);
        }
        res*=-1;
        return res;
    }else{
    while(num){
        res = res *10+ num %10;
        num=Math.floor(num/10);
    }
    return res;
    }
}

revNum(-123456);