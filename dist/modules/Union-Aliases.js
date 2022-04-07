"use strict";
function combine(a, b, resultConversion) {
    if ((typeof a === "number" && typeof b === "number") ||
        resultConversion === "as-number") {
        return Number(a) + Number(b);
    }
    return a.toString() + b.toString();
}
combine("1", "2", "as-number");
