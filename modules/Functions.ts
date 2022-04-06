function add(a: number, b: number): number {
  return a + b;
}

function printNumber(a: number): void {
  //Function Type: void
  console.log("Result: " + a);
}

let combineValues: (a: number, b: number) => number; // Function as a type

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;

  cb(result);
}

addAndHandle(1, 2, (result) => console.log(result));

function generateError(message: string): never {
  // "never" returns anything, not even undefined like "void"
  throw new Error(message);
}

generateError("An error occured");
