type Combinable = number | string; // Union Types
type ConversionDescriptor = "as-number" | "as-text"; // Literal Types

function combine(
  a: Combinable, // Type Aliases
  b: Combinable,
  resultConversion: ConversionDescriptor
) {
  if (
    (typeof a === "number" && typeof b === "number") ||
    resultConversion === "as-number"
  ) {
    return Number(a) + Number(b);
  }

  return a.toString() + b.toString();
}

combine("1", "2", "as-number");
