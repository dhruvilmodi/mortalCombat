import DigiPet from './DigiPet';
//DO THIS:  import Armor
import Armor from './Armor';
//DO THIS:  import OffensiveFood
import OffensiveFood from './OffensiveFood';
//DO THIS:change the name of the fighter to one of your own choosing. Make it cool


class Kratos implements DigiPet{
    //DO THIS:  you'll need to define tamName, hp
    tamName : string;
    hp : number;
    /*
    DO THIS: make armor for your fighter.  They are strong against what they have most of 3 caterogies:
        -fruit(strong against fruit, weak against grain)
        -meat(strong against meat, weak against fruit)
        -grain(strong against grain, weak against meat)
    */
    defenseCharacteristics : Armor = {strongAgainst:"fruit", weakAgainst: "grain"};
    //DO THIS:  declare an array called foods that is made of OffensiveFood weapons
    foods : OffensiveFood[];

    //DO THIS: have your constructor take in tamName which will be your fighters name in the ring
    constructor(tamName:string){
        this.tamName = tamName;
        this.hp = 60;
        console.log(`my name is ${this.tamName}`);

        //DO THIS:  use 'this' and foods to make an array of OffensiveFoods
        this.foods = [
            {foodName: "bhel", foodCat: "grain", damage:6},
            {foodName: "sandwich", foodCat: "grain", damage:3},
            {foodName: "vadapav", foodCat: "meat", damage:2},
            {foodName: "sukhdi", foodCat: "grain", damage:3},
            {foodName: "bhaji Pav", foodCat: "grain", damage:3},
            {foodName: "chole", foodCat: "meat", damage:3},
            {foodName: "cherry", foodCat: "meat", damage:10},
            {foodName: "mango", foodCat: "grain", damage:12},
            {foodName: "apple", foodCat: "fruit", damage:10},
            {foodName: "pineapple", foodCat: "fruit", damage:8},
        ]
    }


    //DO THIS:  make a function that will return your fighters name
    public getFighterName():string{
        return this.tamName;
    }

    //DO THIS:  make a defend function that will return the users Armor
    defend():Armor {
        return this.defenseCharacteristics;
    }
    

    //DO THIS:  make an attack function that will return a random OffensiveFood weapon
    attack():OffensiveFood{
        let foodNum = Math.floor(Math.random() * this.foods.length);
        return this.foods[foodNum];
    }

    //DO THIS:  make a takeDamage function that takes in a number and reduces hp

    takeDamage(damage: number):void{
        this.hp -= damage;
    }

    //DO THIS:  make a getHP function that will return the users current hp
    public getHP():number{
        return this.hp;
    }
}

//DO THIS:  change FighterA to your fighters cool class name
export default Kratos;
