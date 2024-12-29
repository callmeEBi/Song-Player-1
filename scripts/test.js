let s = 1;

const add = (function () {
  return function () {
    s++; // Increment the outer s
  };
})();

add(); // Call the function to increment
console.log(s);
