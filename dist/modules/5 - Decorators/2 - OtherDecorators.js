"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogProperty(target, name) {
    console.log("Logging Property..");
    console.log(target, name);
}
function LogAccessor(target, name, descriptor) {
    console.log("Logging Accessor..");
    console.log(target, name, descriptor);
}
function LogMethod(target, name, descriptor) {
    console.log("Logging Method..");
    console.log(target, name, descriptor);
}
function LogParameter(target, name, position) {
    console.log("Logging Parameter..");
    console.log(target, name, position);
}
class Product {
    title;
    _price;
    set price(value) {
        this._price = value;
    }
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    getTaxedPrice(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LogProperty
], Product.prototype, "title", void 0);
__decorate([
    LogAccessor
], Product.prototype, "price", null);
__decorate([
    LogMethod,
    __param(0, LogParameter)
], Product.prototype, "getTaxedPrice", null);
//# sourceMappingURL=2%20-%20OtherDecorators.js.map