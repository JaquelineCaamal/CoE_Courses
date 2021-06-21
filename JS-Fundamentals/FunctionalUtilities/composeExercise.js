// Currying example
function sumCurry(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

sumCurry(1)(2)(3);

// Implement your own compose function
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
