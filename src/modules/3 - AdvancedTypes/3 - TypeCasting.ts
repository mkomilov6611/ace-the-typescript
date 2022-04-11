/*
    Type Casting
*/

// Example: 1 "<>"
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

userInputElement.value = "Hi there";

// Example: 2 "as"
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement2.value = "Hi there";
