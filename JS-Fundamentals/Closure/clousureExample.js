// Explanation
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = () => {
    alert(`${x} ${++count}`);
  };

  return alerter;
};

const funcAlert = myAlert(); // creates a new execution context of the myAlert function
const funcAlert2 = myAlert(); // same
funcAlert(); // This will run the alerter function again from the execution context that has been created by funcAler
funcAlert(); // If we continue calling this function, the count value would continue to increase by 1 each time

// Example
const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};

const didGreenDoItWithA = newClue("Green");
didGreenDoItWithA("candlestick");

// CLOSURE RECIPE:
// 1. Create your parent function
// 2. Define some variables in the parent function’s local scope
// 3. Define a function inside the parent function. This is called a child
// 4. Return the child function from inside the parent function

function checkscope() {
  // 1
  var innerVar = "local scope"; // 2
  function innerFunc() {
    // 3
    return innerVar;
  }
  return innerFunc; // 4
}
// EXECUTION
// 1. Run the parent function and save it to a variable. This variable will now hold whatever the parent function returns;
// i.e. the child function
// 2. Optional: Check what the variable now holds as it value, it should be the child function
// 3. Run the inner function by calling your newly created variable

var test = checkscope();
test;
test;
