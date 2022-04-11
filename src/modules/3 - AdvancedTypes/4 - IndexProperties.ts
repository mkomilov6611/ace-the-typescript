/* 
   Index Properties
*/

interface ErrorContainer {
  [prop: string]: string;
  //   hasAny: boolean;  <- This not allowed as now any prop should be type of string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
