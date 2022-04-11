/* 
   Function Overloads
*/

function merge(a: string, b: string): string;
function merge(a: string, b: number): string;
function merge(a: number, b: string): string;

function merge(a: number, b: number): number;

function merge(a: Joinable, b: Joinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = merge("i", "Mac");
result.split(""); // "split" Works now as we defined exact types for different scenarios
