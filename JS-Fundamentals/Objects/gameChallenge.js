// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue.

// First we have to create the object
let clueGame = {};

// We create de property murderer and not specify because we already don´t know who is
clueGame.murderer = "??";

// We add the possible weapons.
//clueGame['weapons'] = ['Knife', 'Gun', 'Angry cats', 'Stick'] // This is a COLLECTION or list of a certain thing.

// If we want to add more properties on every item of this collection we can make an array of objects
clueGame['weapons'] = [
  {type: 'Knife', location: 'Library'},
  {type: 'Gun', location: 'Conservatory'},
  {type: 'Angry Cats', location: 'Pool'},
  {type: 'Stick', location: 'Room'},
  ];

// Now we want to add the characters of the name 
clueGame.name = [];
clueGame.name[0] = 'Miss Scarlet'; //By passing the index where we want to locate this string
clueGame.name.push('Mr. Green'); // Pushing at the end of the array this string
//['Miss Scarlet', 'Mr. Green']
  