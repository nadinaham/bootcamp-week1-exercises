/**
 * Part 1:
 *    What will print and why?
 *      1 will print, and then 2 on the next line, and the undefined on the last.
 *    What will change if we delete line 15? Why?
 *      The undefined would be replaced by 1, because the variable a would no longer be replaced by a null/underfined value and would remain the same as when it was first declared one outside of both functions.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 *      Done!
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 *      Changed var a in function x() to equal 2.
 */

let x = () => {
  let a = 2;
  console.log(a);
}

let y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
