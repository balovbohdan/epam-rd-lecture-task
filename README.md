# About
This is a small challenges for my lectures about "Memory Management" and "Errors Handling"
in JavaScript. These challenges will help you to strength your understanding of the appointed
topics. Feel free to let me know if you have any questions or proposals. Good luck!

# Installation
**1. Clone repository**<br>
At first, you have to clone this repository to your local computer. Run the following
command in bash:
```bash
git clone https://github.com/balovbohdan/fwd-ann
```

**2. Rename folder _(optional)_**<br>
Then, if you want, you can rename folder containing code (original one is rather long).
To rename containing folder, run the following command:
```bash
mv epam-rd-lecture-task new-name
``` 
For example:
```bash
mv epam-rd-lecture-task challenge
```
As a result of this example the folder will be renamed from `epam-rd-lecture-task` to `challenge`.

**3. Add implementation an run tests!**<br>
For now you can open `index.html` in you browser. Use browser's console to run quick commands
(see below). Open JavaScript files from `/js/` folder and solve proposed tasks.

# Tasks
### Memory management
You have to develop code to calculate exponentiated number.
```javascript
function pow(number, exponent) {
  // implementation...
}

pow(2, 2); // 4
pow(2, 3); // 8
pow(1, 1); // 1
```
You have to develop two versions of functon:
1. usion recurion
2. using cycle
Add your implementations to the `js/memory-management.js` file. Then, run tests by calling `memoryManagement.testFunctions()` in a browser's console to make sure your implementations are correct. If tests pass, run `memoryManagement.benchmarkFunctions()` to explore how fask your functions are.
### Errors handling
_Coming soon..._

# Quick commands
There are some quick commands you can run in a browser's console to test your implementation
of the provided tasks.
### Memory management
```javascript
// Test if the implementation is working correctly.
memoryManagement.testFunctions();

// Run benchmarks to see how fast your functions are.
memoryManagement.benchmarkFunctions();
```
### Errors handling
```javascript
// coming soon...
```

# GitHub Repository
https://github.com/balovbohdan/epam-rd-lecture-task

# Contributing
Pull requests are welcome. You can use this code freely for
your own projects and/or experiments. If you have some questions or proposals
feel free to message me (<balovbohdan@gmail.com>) or open an
[issue](https://github.com/balovbohdan/epam-rd-lecture-task/issues).
