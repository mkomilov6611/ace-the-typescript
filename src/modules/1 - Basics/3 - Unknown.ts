let userInput: unknown; //has better type restriction to "any"
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
