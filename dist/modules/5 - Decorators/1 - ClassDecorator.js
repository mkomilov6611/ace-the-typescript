"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, mountId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const mountElement = document.getElementById(mountId);
                if (!mountElement) {
                    return;
                }
                mountElement.innerHTML = template;
                mountElement.querySelector("h1").innerText = this.name;
            }
        };
    };
}
let Human = class Human {
    name = "John";
    constructor() {
        console.log("Creating human instance..");
    }
};
Human = __decorate([
    Logger("Logging-Human"),
    WithTemplate(`<h1>Some body</h1>`, "app")
], Human);
