"use strict";
const names = ["Max", "Manuel"];
const promise = new Promise((resolve, reject) => setTimeout(() => {
    resolve("This is done");
}, 1000));
function mergeTwoObjects(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = mergeTwoObjects({ name: "Max" }, { age: 30 });
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Max", age: 30 }, "name");
