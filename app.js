var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["READ_ONLY"] = "Read Only";
    Roles["AUTHOR"] = "Author";
})(Roles || (Roles = {}));
var person = {
    name: "Some ",
    age: 23,
    hobbies: ["Sports", "Cooking"],
    roles: [[1, Roles.ADMIN]]
};
