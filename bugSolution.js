function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Error: Inputs must be numbers
console.log(foo(1, 2));   // Output: 3