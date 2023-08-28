/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 *///const { animal } = require("./data");
//const { animal, animals } = require("./data");



//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, findAnimal){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === findAnimal){
            return animals[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    let index = animals.findIndex(animal => animal.name === name)
    if(index !== -1){
     animals[index] = replacement;  
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    let index = animals.findIndex(animal => animal.name === name)
    if(index !== -1){
        animals.splice(index, 1)
    }
    }
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animal, animals){
// check if the animal object has a name property with a length > 0.
 if(!animal.name || animal.name.length === 0){
    console.log("Animal must have a valid name.");
    return;
 }
    //check to see if the animal object has a species property.

 if(!animal.species || animal.species.length === 0){
    console.log("Animal must have a valid species.")
    return;
 }

var isAGreatName = animals.every(function(existingAnimal){
    return existingAnimal.name !== animal.name;
 });

    if(!isUn){
        console.log("Animal name must be unique.");
        return;
    }

    animals.push(animal);
    console.log("Animal name must be unique.")
    }
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
