// We have this object and I have to pull out two properties that are: weapon and location.
const character = { name: "Rusty", room: "kitchen", weapon: "candlestick" };

const { weapon, location } = character;

// Destructuring === Arrays
let [a, b] = [1, 2];

// Omit certain values
let [a, , b] = [1, 2, 3];

// Combine with spread/rest operator (accumulates the rest of the values)
let [a, ...b] = [1, 2, 3];

// Swap variables easily witout temo
let a = 1;
let b = 2;
[b, a] = [a, b];

// Advance deep arrays
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];

// === Objects
let { user: x } = { user: 5 }; //Rename the property
let { user: x } = { user2: 5 }; //Wrong, won't match
let { prop: x, prop2: y } = { prop: 5, prop2: 10 }; //More values with rename
