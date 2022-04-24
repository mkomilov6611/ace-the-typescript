var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import _ from "lodash";
const shuffledArray = _.shuffle([1, 2, 3, 4, 5]);
console.log({ shuffledArray });
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { IsNotEmpty, IsPositive, IsNumber, validate } from "class-validator";
class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getInformation() {
        return [this.title, `$${this.price}`];
    }
    getTitle() {
        return this.title;
    }
}
__decorate([
    IsNotEmpty()
], Product.prototype, "title", void 0);
__decorate([
    IsNumber(),
    IsPositive()
], Product.prototype, "price", void 0);
const products = [
    {
        title: "A car",
        price: 10000,
    },
    {
        title: "A book",
        price: -10,
    },
];
const loadedProducts = plainToClass(Product, products);
loadedProducts.forEach((product) => {
    validate(product).then((errors) => {
        if (errors.length) {
            console.log(`Error: ${product.getTitle()} `, errors);
        }
        else {
            console.log("Product: ", product.getInformation());
        }
    });
});
//# sourceMappingURL=examples.js.map