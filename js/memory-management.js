// Quick commands, you can use in a browser console:
// 1. "memoryManagement.testFunctions()" to check if your implementation is correct.
// 2. "memoryManagement.benchmarkFunctions()" to test speed of your functions.

//////////////////////////////////////////////////////

// Please, add your implementation in this block.

function powByCycle(number, exponent) {
  // implementation...
}

function powByRecursion(number, exponent) {
  // implementation...
}

//////////////////////////////////////////////////////

// Function "benchmarkFunctions" will help you to test
// speed of "powByCycle" and "powByRecursion" functions.
// Results of the benchmark will show you what implementation
// (recursion or cycle) is faster. Run "memoryManagement.benchmarkFunctions()"
// in browser's console to get results.

function benchmarkFunctions() {
  const functions = [powByCycle, powByRecursion];

  for (let fn of functions) {
    const passedTime = benchmarkFunction(fn);

    console.log(`Benchmark: ${fn.name} took ${passedTime} ms`);
  }
}

function benchmarkFunction(fn, fnArgs = [], iterationsQty = 1000) {
	const start = performance.now();

  for (let i = 1; i <= iterationsQty; i++) {
    fn(...fnArgs);
  }

  return (performance.now() - start).toFixed(4);
}

//////////////////////////////////////////////////////

// Function "testFunctions" will help you to check if
// your implementations of "powByCycle" and "powByRecursion"
// functions are correct. Just run "memoryManagement.testFunctions()" in the
// browser's console to check if everything is working OK.

function testFunctions() {
  const functions = [powByCycle, powByRecursion];

  const testData = [
    [1, 1, 1],
    [2, 2, 4],
    [2, 3, 8],
    [3, 2, 9],
  ];

  const isCorrect = functions.reduce(
    (result, fn) => result && testFunction(fn, testData),
    true,
  );

  if (!isCorrect) {
    console.error(`Tests are not passed! Check implementation.`);
  }
}

function testFunction(fn, data) {
  let isCorrect = true;

  for (let item of data) {
    const result = fn(item[0], item[1]);

    if (result !== item[2]) {
      isCorrect = false;

      console.warn(`
        "${item[0]} ** ${item[1]} = ${result}" is not correct.
        Expected result: ${item[2]}.
      `);
    }
  }

  return isCorrect;
}

//////////////////////////////////////////////////////

const memoryManagement = {
  testFunctions,
  benchmarkFunctions,
};

//////////////////////////////////////////////////////
