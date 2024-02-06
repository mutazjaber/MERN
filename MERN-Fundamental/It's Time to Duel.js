class Unit {
    constructor(name, cost, power, resilience){
        this.name = name ;
        this.cost = cost ; 
        this.power = power ;
        this.resilience = resilience ;
    }
    attack(target){
        target.resilience -= this.power
        console.log(this.name + "attacked  " + target.name + "," + target.name +"resiliance after attack is  :"+target.resilience);
    }
    
}
class Effect {
    constructor (name, cost, magnitude, stat){
        this.name=name;
        this.cost=cost;
        this.stat =stat ;
        this.magnitude = magnitude ;
    }
    play(target){
        if(this.stat === "resilience"){
            target.resilience += this.magnitude;
            console.log(this.name + " activated on " + 
            target.name + "'s " + this.stat + ", " + 
            target.name + "'s " + this.stat + " becomes => " + 
            target.resilience);
        } else if(this.stat === "power"){
            target.power += this.magnitude;
            console.log(this.name + " activated on " + 
            target.name + "'s " + this.stat + ", " + 
            target.name + "'s " + this.stat + " becomes => " + 
            target.power);
        } else {
            console.log("Error: Invalid stat.");
        }
    }
}
let redBeltNinja = new Unit ("Red Belt ninja ", 3, 3, 4) ;
console.log("red belt ninja has a cost of "+ redBeltNinja.cost);
redBeltNinja.attack (redBeltNinja) ; 
console.log (redBeltNinja);

let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log( blackBeltNinja );

const hardAlgorithm = new Effect("Hard Algorithm", 2, 3, "resilience");
hardAlgorithm.play(blackBeltNinja);
console.log(blackBeltNinja);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, -2, "resilience")
unhandledPromiseRejection.play(redBeltNinja)
console.log(redBeltNinja)

const pairProgramming = new Effect("Pair Programming", 3, 2, "power");
pairProgramming.play(blackBeltNinja);
console.log(blackBeltNinja);


