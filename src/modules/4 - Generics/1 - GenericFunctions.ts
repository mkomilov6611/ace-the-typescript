/* 
    Built-in Generics
*/

const names: Array<string> = ["Max", "Manuel"]; //string[]

const promise: Promise<string> = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("This is done");
  }, 1000)
);

/* 
    Custom Generics
*/

// Example: 1 - extends
function mergeTwoObjects<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = mergeTwoObjects({ name: "Max" }, { age: 30 }); // merged.age or merged.name, we have access because we explicitly defined object types T, U

// Example: 2 - extends
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

// Example: 3 - keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Max", age: 30 }, "name");
