class Ninja{
    
    constructor(name,health,speed,strength,wisdom){
        this.name = name;
        this.health = 90 ;
        this.speed = 3 ;
        this.strength = 3 ;
    }
    sayName(){
        console.log("My name is " + this.name);
    }
    showStats(){
        console.log(`I am a ${this.name}, my health is ${this.health}, 
        I can run at speed of ${this.speed} ,and my strength is ${this.strength} `);
        
    }
    drinkSake(){
        this.health = this.health+10;
    }
    speakWisdom(){
        console.log('The wisdom of the ninja says: "Always be ready to die')
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();




