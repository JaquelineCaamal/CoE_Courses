// Currying example
function sumCurry(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

sumCurry(1)(2)(3);

// Currying Bianca explanation
// Is when you create a function that can then later be called multiple times with different arguments
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};

// Implement your own compose function
// Is about creating small functions and creating bigger and more complete functions with them
const _ = {};
_.compose = (...functionsArgs) => {
  console.log("0", ...functionsArgs);
  return (result) => {
    console.log("1", result); // you
    console.log("?", [...functionsArgs].reverse()); // [exclaim, consider]
    //Thinking if it's better to change for reduceRight...
    return [...functionsArgs].reverse().reduce((result, currentFunction) => {
      // First function: result = you, currentFunction(result) = YOU!
      // Second function: result = YOU!, currentFunction(result) = I think it could be... YOU!
      console.log("2", result, currentFunction(result));
      return currentFunction(result);
    }, result);
  };
};

const consider = (name) => {
  return `I think it could be... ${name}`;
};

const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);
blame("you");
