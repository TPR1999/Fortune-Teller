function randomNum(num){
   return Math.floor(Math.random() * num);
}


const fortunes = {
    spiritAnimal: ["Frog", "Pony", "Coy", "Ardvark"],
    luck: ["You will see great wisdom.", "someone around you will see grear fortune.", "you will be blessed with great clarity.", "you will stumble upon a curiosity."],
    toDo: ["buy a lottery ticket.", "be aware of your surroundings.", "belax and enjoy the day.", "see the beauty in the struggle."]
};
let myFortune = [];

for(let prop in fortunes){
    let fortuneGen = randomNum(fortunes[prop].length)
    switch(prop){
        case 'spiritAnimal':
            myFortune.push(`Today your soul contains the spirit of the ${fortunes[prop][fortuneGen]}`)
        break
        case 'luck':
            myFortune.push(`Upon this day ${fortunes[prop][fortuneGen]}`)
        break
        case 'toDo':
            myFortune.push(`You should ${fortunes[prop][fortuneGen]}`)
        break
    }
}
console.log(myFortune);