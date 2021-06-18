// Exercise #1: Loop through the suspects array

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    const element = game.suspects[i];
    console.log(element);
  }
}

foo();

// Exercise #2: Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty

function bar(game) {
  // Loop through the suspects
  for (let i = 0; i < game.suspects.length; i++) {
    // Loop trough every property of the suspects
    for (var key in game.suspects[i]) {
      // First I want to check if the key is name or color, if is name we are going to check if is the guilty one
      if (key === "name") {
        if (game.suspects[i][key] === "Rusty") {
          console.log("You found the guilty!");
        } else {
          console.log("Keep looking!");
        }
      }
    }
  }
}

bar(game);

// Exercise #3: Destructure this nested data structure into two variables with the strings 'red' and 'orange'

let suspects = [
  {
    name: "Rusty",
    color: "orange",
  },
  {
    name: "Miss Scarlet",
    color: "red",
  },
];

const [{ color: colorOrange }, { color: colorRed }] = suspects; // We are taking the property color of the object and asign 'colorOrange' as the name of the variable
