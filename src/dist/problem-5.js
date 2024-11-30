"use strict";
function getProperty(object, key) {
    return object[key];
}
var person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
