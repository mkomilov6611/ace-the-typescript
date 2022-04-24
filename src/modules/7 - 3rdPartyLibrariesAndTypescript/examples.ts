/*
    Lodash example where we have to install @types/lodash also to make it work
*/

import _ from "lodash";

const shuffledArray = _.shuffle([1, 2, 3, 4, 5]);

console.log({ shuffledArray });

/*
    class-transformer and class-validator example
*/

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { IsNotEmpty, IsPositive, IsNumber, validate } from "class-validator";

class Product {
  @IsNotEmpty()
  private title: string;

  @IsNumber()
  @IsPositive()
  private price: number;

  constructor(title: string, price: number) {
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
    } else {
      console.log("Product: ", product.getInformation());
    }
  });
});
