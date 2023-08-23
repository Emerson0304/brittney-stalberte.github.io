/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `animal` and assign it to an empty object.
var animal = {};
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = 'Lion';
//Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = 'Lonnie';
//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal);
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array.
var noises = [];
//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = 'purr';
//Using an array function add another noise to the end of `noises`.
noises.push('grunt');
//
noises.unshift('roar');
//
noises[noises.length] = 'growl';
//
console.log(noises.length);
//
console.log(noises[noises.length - 1]);
//
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal ={
  species: 'Lion',
  name: 'Lonnie',
  noises: []
}

animal['noises'] = [];
animal.noises.push();
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named 'animals' and assign it to an empty array.
var animals = [];
//push the animal that we created to animals
animals.push(animal);
//print animals to check work.
console.log(animals);

//create a variable called duck and assign it to the data provided.
const duck = {
species: 'duck',
name: 'Duke',
noises: ['quack', 'honk', 'sneeze', 'woosh']
};
// push duck to animals.
animals.push(duck);
// print animals to the console to check work.
console.log(animals);


//Create two more animal objects each with a species, a name, and at least two sounds and add each one to aniamls.
var tiger = {
  species: 'cat',
  name: 'Tony',
  noises: ['purr', 'roar']
};

var monkey = {
  species: 'bonnet macaque',
  name: 'Mo',
  noises: ['howl', 'scream']
};
//push new two aniamls
animals.push(tiger, monkey);

//console.log animals and the length of animals to check work.
console.log(animals);
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*I am deciding to go with an array to store the list of friends because it provides an ordered collection 
that can easily hold multiple items and is well-suited for a simple list of elements */


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}