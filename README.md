# Unexpected String Concatenation in JavaScript

This repository demonstrates a common but easily overlooked bug in JavaScript: unexpected string concatenation due to loose typing.  The `foo` function intends to add two numbers, but because of implicit type coercion, it concatenates them as strings when one of the inputs is a string.

The `bug.js` file contains the buggy code, while `bugSolution.js` offers a solution using explicit type checking or conversion.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (Node.js, browser console, etc.).
4. Observe the unexpected output.
5. Compare with the corrected code in `bugSolution.js`.

## Solution

The solution uses type checking to ensure both inputs are numbers before performing addition.  Alternative solutions include using `parseInt()` or `parseFloat()` to explicitly convert the inputs to numbers.