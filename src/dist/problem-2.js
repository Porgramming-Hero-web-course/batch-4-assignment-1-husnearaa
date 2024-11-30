"use strict";
function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
