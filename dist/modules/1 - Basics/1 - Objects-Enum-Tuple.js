"use strict";
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["READ_ONLY"] = "Read Only";
    Roles["AUTHOR"] = "Author";
})(Roles || (Roles = {}));
const person = {
    name: "Some Guy",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    roles: [[1, Roles.ADMIN]],
};
//# sourceMappingURL=1%20-%20Objects-Enum-Tuple.js.map