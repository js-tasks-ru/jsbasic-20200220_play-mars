/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let factorial = n;
  if (factorial == 0) {
    return 1;
  }
  while (n > 1) {
    factorial = factorial * --n;
  }
  return factorial;
}