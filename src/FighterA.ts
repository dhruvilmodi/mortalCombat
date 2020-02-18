import DigiPet from './DigiPet';

//DO THIS:  import Armor

//DO THIS:  import OffensiveFood

//DO THIS:change the name of the fighter to one of your own choosing. Make it cool


class FighterA implements DigiPet{
    //DO THIS:  you'll need to define tamName, hp
    
    
    /*
    DO THIS: make armor for your fighter.  They are strong against what they have most of 3 caterogies:
        -fruit(strong against fruit, weak against grain)
        -meat(strong against meat, weak against fruit)
        -grain(strong against grain, weak against meat)
    */

    //DO THIS:  declare an array called foods that is made of OffensiveFood weapons
    

    //DO THIS: have your constructor take in tamName which will be your fighters name in the ring
    constructor(           ){
        this.tamName = tamName;
        this.hp = 60;
        console.log(`my name is ${this.tamName}`);

        //DO THIS:  use 'this' and foods to make an array of OffensiveFoods
        
    }

    //DO THIS:  make a function that will return your fighters name
    

    //DO THIS:  make a defend function that will return the users Armor
    

    //DO THIS:  make an attack function that will return a random OffensiveFood weapon
    

    //DO THIS:  make a takeDamage function that takes in a number and reduces hp
    

    //DO THIS:  make a getHP function that will return the users current hp
    
}

//DO THIS:  change FighterA to your fighters cool class name
export default FighterA;