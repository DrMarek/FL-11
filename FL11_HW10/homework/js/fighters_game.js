let wins=0, losses=0;
class Fighter {
    constructor(name, damage, hp, agility){
        this.name=name;
        this.damage=damage;
        this.hp=hp;
        this.agility=agility;
    }
    getName(){
        return this.name;
    }
    getDamage(){
        return this.damage;
    }
    getAgility(){
        return this.agility;
    }
    getHealth(){
        return this.hp;
    }
    attack(Fighter){
        this.myFighter=myFighter;
        this.myFighter2=myFighter2;
        let attack =0;
        if(Fighter===myFighter2){
        let agility=Math.round(myFighter.agility/10)*10;
        switch(agility){
            case 0: attack=100;break;
            case 10: attack=90;break;
            case 20: attack=80;break;
            case 30: attack=70;break;
            case 40: attack=60;break;
            case 50: attack=50;break;
            case 60: attack=40;break;
            case 70: attack=30;break;
            case 80: attack=20;break;
            case 90: attack=10;break;
            case 100: attack=0;break;
            default:break;
        }
        console.log(attack);
        if(attack>=50){
            myFighter2.hp-=myFighter.damage;
            console.log(myFighter.name+" make "+ myFighter.damage 
                        +" damage to "+myFighter2.name);
            console.log(myFighter2.hp);
            }else{
                console.log(myFighter.name+" attack missed");
            }
        }else{
            let agility=Math.round(myFighter2.agility/10)*10;
            switch(agility){
                case 0: attack=100;break;
                case 10: attack=90;break;
                case 20: attack=80;break;
                case 30: attack=70;break;
                case 40: attack=60;break;
                case 50: attack=50;break;
                case 60: attack=40;break;
                case 70: attack=30;break;
                case 80: attack=20;break;
                case 90: attack=10;break;
                case 100: attack=0;break;
                default:break;
            }
            console.log(attack);
            if(attack>=50){
                myFighter.hp-=myFighter2.damage;
                console.log(myFighter2.name+" make "+ myFighter2.damage
                            +" damage to "+myFighter.name);
                console.log(myFighter.hp);
                }else{
                    console.log(myFighter2.name+" attack missed");
                }
        }
    }
    logCombatHistory(){
        console.log("Name: "+this.name+" Wins: "+ wins+" Losses: "+losses); 
    }
    heal(heal){
        this.hp+=heal;
        if(this.hp>=100){
            let diff = this.hp -100;
            this.hp-=diff;
        }
        console.log(this.hp);
    }
    dealDamade(damage){
        if(this.hp < damage){
            this.hp=0;
        }else{
            this.hp-=damage;
        }
    }
    addWin(){
        wins++;
        console.log(wins);
    }
    addLoss(){
        losses++;
        console.log(losses);
    }
};
function battle(myFighter, myFighter2){
    do{
        myFighter.attack(myFighter2);
        myFighter2.attack(myFighter);
    }while (myFighter.getHealth() > 0 && myFighter2.getHealth() > 0);
    if (myFighter.getHealth() > myFighter2.getHealth()) {
        myFighter.addWin();
        myFighter2.addLoss();
    } else {
        myFighter2.addWin();
        myFighter.addLoss();
    } 
    if (myFighter.getHealth() === 0) {
        console.log(myFighter.getName() +" is dead and can't fight!");
    } else if (myFighter2.getHealth() === 0) {
        console.log(myFighter2.getName() +" is dead and can't fight!");
    }
}
const myFighter= new Fighter("John", 20, 100, 25);
const myFighter2= new Fighter("Jack", 20, 100, 25);
let name = myFighter.getName();
console.log(name);
let damage = myFighter.getDamage();
console.log(damage);
let agility = myFighter.getAgility();
console.log(agility);
let health= myFighter.getHealth();
console.log(health);
myFighter.attack(myFighter2);
myFighter2.attack(myFighter);
myFighter.logCombatHistory();
myFighter2.logCombatHistory();
myFighter.heal(50);
myFighter.addWin();
myFighter.addLoss();
myFighter.dealDamade(20);
battle(myFighter, myFighter2);