var email=prompt("Input your email");
var password=null;
var tmppassword=null;
var newpassword=null;
var tmpnewpassword=null;
var que=null;
var minlenghtlogin=6;
var minlenghtpass=5;

if(!email){
    alert("Canceled");
}else if(email.length<minlenghtlogin){
    alert("I don't know any emails having name length less than 6 symbols");
}else if(email==="user@gmail.com"||email==="admin@gmail.com"){
    password=prompt(email+"\nInput your password");
    if(!password){
        alert("Canceled");
    }else if(email==="user@gmail.com"&& password==="UserPass"||
    email==="admin@gmail.com" && password==="AdminPass"){
       que = confirm(email+"\nDo you want to change your password?");
       if(que===true){
            tmppassword=prompt(email+"\nWrite the old password");
            if(!tmppassword){
                alert("Canceled");
            }else if(email==="user@gmail.com"&& password===tmppassword||
            email==="admin@gmail.com" && password===tmppassword){
                newpassword=prompt(email+"\nInput a new password");
                if(newpassword.length<minlenghtpass){
                alert("It’s too short password. Sorry.");
                }else{
                    tmpnewpassword = prompt("Input your new password again.");
                    if(tmpnewpassword===newpassword){
                        alert("You have successfully changed your password.");
                    }else{
                        alert("You wrote the wrong password.");
                    }
                }
            }else{
                alert("Wrong password");
            }
       }else{
           alert("You have failed the change.");
       }       
    }else{
        alert("Wrong password");
    }
}else{
    alert("I don’t know you");
}