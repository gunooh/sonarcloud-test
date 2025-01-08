// sonarcloud-test.js

// 1. Unused variable
const unusedVar = "I am not used anywhere";

// 2. Console statement (often flagged as a code smell in production code)
console.log("This is a console log statement");

// 3. Hardcoded credentials (security issue)
const password = "123456"; // This should never be hardcoded

// 4. Function complexity (function with too many branches)
function complexFunction(input) {
  if (input === "A") {
    return "Case A";
  } else if (input === "B") {
    return "Case B";
  } else if (input === "C") {
    return "Case C";
  } else if (input === "D") {
    return "Case D";
  } else if (input === "E") {
    return "Case E";
  } else if (input === "F") {
    return "Case F";
  } else {
    return "Default case";
  }
}

// 5. Duplicate code
function duplicateFunction1() {
  return "This is duplicate code";
}

function duplicateFunction2() {
  return "This is duplicate code"; // Duplicate
}

// 6. Unused function parameter
function unusedParamFunction(usedParam, unusedParam) {
  return usedParam;
}

// 7. Inefficient loops
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(i, j); // Inefficient nested loop
  }
}