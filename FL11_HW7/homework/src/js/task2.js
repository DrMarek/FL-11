var que = confirm("Do you want to play a game?");
var prize=0;
var zero =0;
var eight = 8;
var three =3;
var twelve=12;
var two=2;
var one=1;
if (que){
        do{
            var contin = null;
            var tmpprize=0; 
            var posprize=100;
            var supposprize=200;
            var attmpt=3;
            var num=zero + Math.random()*(eight-zero);
            num=Math.round(num);
            console.log(num);
            for(var i=0; i<three; i++){
                var tmpnum = 
                Number(prompt("Choose a roulette pocket number from 0 to 8."
                +"\nAttempts left:"
                +attmpt+"\nTotal prize:"+prize+"$\n"
                +"Possible prize on current attempt:"+posprize));
                if(num===tmpnum && attmpt===three){
                    var prize=100;
                    alert("Congratulation, you won!"+
                    "Your prize is: "+prize+"$.");
                    contin=confirm("Do you want to continue?");
                    switch(contin){
                        case true:{
                            var attmpt=3;
                            num=zero + Math.random()*(twelve-zero);
                            num=Math.round(num);
                            console.log(num);
                            for (var i = 0; i < three; i++) {
                                var tmpnum = Number(prompt("Choose a roulette "
                                +"pocket number from 0 to 12.\nAttempts left:"
                                +attmpt+"\nTotal prize:"+prize+"$\n"
                                +"Possible prize on current attempt:"
                                +supposprize));
                                if(num===tmpnum && attmpt===three){
                                    var tmpprize=200;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"+ 
                                    "Your prize is: "+prize+"$.");break;
                                }else if(num===tmpnum && attmpt===two){
                                    var tmpprize=100;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won! "
                                    +"Your prize is: "+prize+"$.");break;
                                }else if (num===tmpnum && attmpt===one){
                                    var tmpprize=50;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"
                                    +"Your prize is: "+prize+"$.");break;
                                }else if(attmpt===one){
                                    alert("Thank you for your participation."
                                    +"Your prize is:"+prize+"$");
                                    break; 
                            }attmpt--;
                            tmpprize/=two;
                            supposprize/=two;
                        }break;
                    }
                        case false:alert("Thank you for your participation."
                        +"Your prize is:"+prize+"$");break;
                        default:break;
                    }
                    break;
                }else if(num===tmpnum && attmpt===two){
                    var prize=50;
                    alert("Congratulation, you won!"
                    +"Your prize is:"+prize+"$.");
                    contin=confirm("Do you want to continue?");
                    switch(contin){
                        case true:{
                            var attmpt=3;
                            num=zero + Math.random()*(twelve-zero);
                            num=Math.round(num);
                            console.log(num);
                            for (var i = 0; i < three; i++) {
                                posprize*=two;
                                var tmpnum = Number(prompt("Choose a roulette"
                                +"pocket number from 0 to 12.\nAttempts left:"
                                +attmpt+"\nTotal prize:"
                                +tmpprize+"$\n"
                                +"Possible prize on current attempt:"
                                +supposprize));
                                if(num===tmpnum && attmpt===three){
                                    var tmpprize=200;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"
                                    +"Your prize is: "+prize+"$.");break;
                                }else if(num===tmpnum && attmpt===two){
                                    var tmpprize=100;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"
                                    +"Your prize is: "+prize+"$.");break;
                                }else if (num===tmpnum && attmpt===one){
                                    var tmpprize=50;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"+
                                    "Your prize is: "+prize+"$.");break;
                                }else if(attmpt===one){
                                    alert("Thank you for your participation."
                                    +"Your prize is:"+prize+"$");
                                    break; 
                            }attmpt--;
                            tmpprize/=two;
                            supposprize/=two;
                        }break;
                    }
                        case false:alert("Thank you for your participation."
                        +"Your prize is:"+prize+"$");break;
                        default:break;
                    }    
                    break;
                }else if(num===tmpnum && attmpt===one){
                    var prize=25;
                    alert("Congratulation, you won!"+
                    "Your prize is:"+prize+"$.");
                    contin=confirm("Do you want to continue?");
                    switch(contin){
                        case true:{
                            var attmpt=3;
                            num=zero + Math.random()*(twelve-zero);
                            num=Math.round(num);
                            console.log(num);
                            for (var i = 0; i < three; i++) {
                                posprize*=two;
                                var tmpnum = Number(prompt("Choose a roulette "+
                                "pocket number from 0 to 12.\nAttempts left:"
                                +attmpt+
                                "\nTotal prize:"+tmpprize+"$\n"+
                                "Possible prize on current attempt:"
                                +supposprize));
                                if(num===tmpnum && attmpt===three){
                                    var tmpprize=200;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"
                                    +"Your prize is: "+prize+"$.");break;
                                }else if(num===tmpnum && attmpt===two){
                                    var tmpprize=100;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"  
                                    +"Your prize is: "+prize+"$.");break;
                                }else if (num===tmpnum && attmpt===one){
                                    var tmpprize=50;
                                    prize+=tmpprize;
                                    alert("Congratulation, you won!"   
                                    +"Your prize is: "+prize+"$.");break;
                                }else if(attmpt===one){
                                    alert("Thank you for your participation." 
                                    +"Your prize is:"+prize+"$");
                                    break; 
                            }attmpt--;
                            tmpprize/=two;
                            supposprize/=two;
                        }break;
                    }
                        case false:alert("Thank you for your participation."+
                        "Your prize is:"+prize+"$");break;
                        default:break;
                    }
                    break;
                }else if(attmpt===one){
                    alert("Thank you for your participation."+ 
                    "Your prize is: … $");
                    break;
                }
                attmpt--;
                posprize/=two;
            }
        }while(confirm("Do you want to play again?"));
    }else{
    alert("You did not become a billionaire, but can.");
}