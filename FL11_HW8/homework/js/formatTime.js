function formatTime(time){
    let days=0;
    let hours=0;
    let minutes=0;
    hours=time/60;
    days=Math.floor(hours/24);
    hours=Math.floor(hours%24);
    minutes=Math.floor(time%60);
    return days+"day(s)"+" "+hours+"hour(s)"+" "+minutes+" "+"minute(s)";
}
formatTime(1446);