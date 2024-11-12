"use strict";
function sumArray(numbers) {
    return numbers.reduce(function (sum, current) { return sum + current; }, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
