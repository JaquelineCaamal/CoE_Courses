function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak: function () {
      console.log("my name is ", name);
    },
  };
}

let suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

// What if we want to call Miss Scarlet and want to output the speak function
CreateSuspectObjects(suspects[0]).speak();

// If we want to pass all the objects to through this function and every tell us their names
var suspectsList = [];

for (var i = 0; i < suspects.length; i++) {
  suspectsList.push(CreateSuspectObjects(suspects[i]).speak());
}

//////////////////////////////////////c
// LOOPING WITH _.each
//////////////////////////////////////
// It accepts two parameters (list, function)
// list: It is the list which contains some elements.
// function: It is the function which is executed by taking each element of the list.

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], list); // Call the callback with a list item
    }
  } else {
    // Loop through object
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(suspects, function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is not guilty");
  } else {
    console.log(name, "is the guilty!!");
  }
});

suspects.forEach(function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is not guilty");
  } else {
    console.log(name, "is the guilty!!");
  }
});
