// * MAP
// Looping with _.map
const _ = {};

_.map = function (list, callback) {
  let store = []; // Create empty array to store
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      store.push(callback(list[i], i, list)); //
    }
    return store;
  }
};

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

_.map(weapons, makeBroken);
weapons.map((e) => makeBroken(e));

// * FILTER
// Looping with _.filter
const _ = {};

_.filter = function (arr, callback) {
  let store = []; // Create empty array to store
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        store.push(arr[i]); //Check if the callback returns true
      }
    }
    return store;
  }
};

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

// * Returns a new array with values that match truth test
let suspects = _.filter(videoData, function (suspectObj) {
  return suspectObj.present;
});
let suspects = videoData.filter((suspectObj) => suspectObj.present);
console.log(suspects);
