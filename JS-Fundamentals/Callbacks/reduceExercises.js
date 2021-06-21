// Exercise: Translate into ES6
var increment = function (n) {
  return n + 1;
};
var square = function (n) {
  return n * n;
};
var doMathSoIDontHaveTo = function (n, func) {
  return func(n);
};
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

// ES6
const increment = (n) => n + 1;

const square = (n) => n * n;

const doMathSoIDontHaveTo = (n, func) => func(n);

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

// Reduce exercise
const _ = {};
_.reduce = function (list, callback, initial) {
  // Loop through list
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    // Save the return value
    memo = callback(list[i], memo); // Call the callback with arr[i], prev/initial
  }
  return memo;
};

_.reduce([1, 2, 3], (v, sum) => v + sum, 0);

//Bianca full explained reduce
const reduce = function (list, cb, initial) {
  let memo = initial; // 3

  for (let i = 0; i < array.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = cb(list[i], memo);
    }
  }
  return memo;
};

// Exercise: Figure out which room no one claims to be the night of the murder from this data set.
const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

function intersection(rooms1, rooms2) {
  const filteredRooms = rooms1.filter((room) => rooms2.includes(room));
  return filteredRooms;
}

const possibleRooms = newDevelopment.map((suspect) => {
  const filteredRooms = suspect.rooms.filter((room) =>
    Object.values(room).includes(false),
  );
  const rooms = filteredRooms.map((rooms) => Object.keys(rooms));
  return rooms.flat(1);
});

console.log(possibleRooms.reduce(intersection));

// Bianca's answear
const notInRoom = (suspect) => {
  // return an array of all of the false values
  const emptyRooms = suspect.rooms.reduce((room, memo) => {
    if (room === false) memo.push(room);
    return memo;
  }, []);

  return emptyRooms;
};

const notInRooms = newDevelopment.map(notInRoom);

_.intersection(...notInRooms); //Lodash function
