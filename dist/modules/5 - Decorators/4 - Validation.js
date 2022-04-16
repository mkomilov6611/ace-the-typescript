"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function registrateValidator(target, name, validator) {
    const className = getClassName(target);
    if (!registeredValidators.hasOwnProperty(className)) {
        registeredValidators[className] = {};
    }
    const existingLocalValidators = registeredValidators[className][name] || [];
    registeredValidators[className][name] = [
        ...existingLocalValidators,
        validator,
    ];
    console.log("Registered", registeredValidators);
}
function getClassName(obj) {
    return obj.constructor.name;
}
function Required(target, name) {
    registrateValidator(target, name, "required");
}
function PositiveNumber(target, name) {
    registrateValidator(target, name, "positive");
}
function Validate(obj) {
    const validatorsConfigObj = registeredValidators[getClassName(obj)];
    if (!validatorsConfigObj) {
        return true;
    }
    return Object.keys(validatorsConfigObj).every((propName) => {
        return Object.values(validatorsConfigObj[propName]).every((validator) => {
            switch (validator) {
                case "required":
                    return !!obj[propName];
                case "positive":
                    return obj[propName] > 0;
            }
        });
    });
}
class Course {
    title;
    price;
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const physics = new Course("Physics", 199);
const invalid = new Course("", -199);
console.log(Validate(invalid));
console.log(Validate(physics));
