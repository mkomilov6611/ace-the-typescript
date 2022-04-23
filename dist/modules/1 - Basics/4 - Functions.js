"use strict";
function add(a, b) {
    return a + b;
}
function printNumber(a) {
    console.log("Result: " + a);
}
let combineValues;
function addAndHandle(a, b, cb) {
    const result = a + b;
    cb(result);
}
addAndHandle(1, 2, (result) => console.log(result));
function generateError(message) {
    throw new Error(message);
}
generateError("An error occured");
//# sourceMappingURL=4%20-%20Functions.js.map